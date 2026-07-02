import { type SQLiteDatabase } from "expo-sqlite";

const DATABASE_VERSION = 1;

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const row = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );

  const currentVersion = row?.user_version ?? 0;

  if (currentVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      PRAGMA foreign_keys = ON;

      CREATE TABLE habits (
        id                  TEXT PRIMARY KEY NOT NULL,
        habit_name          TEXT NOT NULL,
        habit_emoji         TEXT NOT NULL,
        habit_goal          TEXT,
        frequency           TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly')),
        weekly_due_weekday  INTEGER,
        is_active           INTEGER NOT NULL DEFAULT 1,
        created_at          TEXT NOT NULL,
        updated_at          TEXT NOT NULL,
        CHECK (
          (frequency = 'daily' AND weekly_due_weekday IS NULL)
          OR
          (frequency = 'weekly' AND weekly_due_weekday BETWEEN 0 AND 6)
        )
      );

      CREATE TABLE habit_completions (
        id                 TEXT PRIMARY KEY NOT NULL,
        habit_id           TEXT NOT NULL,
        period_key         TEXT NOT NULL,
        completed_on_date  TEXT,
        is_completed       INTEGER NOT NULL DEFAULT 1,
        completed_at       TEXT NOT NULL,
        FOREIGN KEY (habit_id) REFERENCES habits(id) ON DELETE CASCADE,
        UNIQUE (habit_id, period_key)
      );

      CREATE INDEX idx_habit_completions_habit_id ON habit_completions(habit_id);
      CREATE INDEX idx_habit_completions_period_key ON habit_completions(period_key);

      CREATE TABLE day_summaries (
        id                    TEXT PRIMARY KEY NOT NULL,
        date                  TEXT NOT NULL UNIQUE,
        due_count             INTEGER NOT NULL DEFAULT 0,
        completed_count       INTEGER NOT NULL DEFAULT 0,
        is_perfect_day        INTEGER NOT NULL DEFAULT 0,
        streak_at_end_of_day  INTEGER NOT NULL DEFAULT 0,
        updated_at            TEXT NOT NULL
      );

      CREATE TABLE streak_state (
        id                TEXT PRIMARY KEY NOT NULL DEFAULT 'global',
        current_streak    INTEGER NOT NULL DEFAULT 0,
        max_streak        INTEGER NOT NULL DEFAULT 0,
        last_perfect_date TEXT,
        updated_at        TEXT NOT NULL
      );

      INSERT INTO streak_state (id, current_streak, max_streak, last_perfect_date, updated_at)
      VALUES ('global', 0, 0, NULL, datetime('now'));

      PRAGMA user_version = ${DATABASE_VERSION};
    `);
  }
}
