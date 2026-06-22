import { borderRadius, colors, typography } from "@/constants/theme";
import getWeekDates, { isSameDay } from "@/data/getWeekDates";
import { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type WeekCalendarProps = {
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
};

const DATE_CHIP_SIZE = 40;

export default function WeekCalendar({
  selectedDate = new Date(),
  onSelectDate,
}: WeekCalendarProps) {
  const weekDates = useMemo(() => getWeekDates(selectedDate), [selectedDate]);

  return (
    <View style={styles.container}>
      {weekDates.map((item) => {
        const isSelected = isSameDay(item.date, selectedDate);

        return (
          <Pressable
            key={item.date.toISOString()}
            style={styles.dayColumn}
            onPress={() => onSelectDate?.(item.date)}
          >
            <Text
              style={[styles.dayLabel, isSelected && styles.dayLabelSelected]}
            >
              {item.day}
            </Text>
            <View
              style={[
                styles.dateChip,
                isSelected ? styles.dateChipSelected : styles.dateChipDefault,
              ]}
            >
              <Text
                style={[
                  styles.dateNumber,
                  isSelected && styles.dateNumberSelected,
                ]}
              >
                {item.dayNumber}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayColumn: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  dayLabel: {
    ...typography.labelSm,
    color: colors.outline,
  },
  dayLabelSelected: {
    fontFamily: typography.titleSm.fontFamily,
    color: colors.onSurface,
  },
  dateChip: {
    width: DATE_CHIP_SIZE,
    height: DATE_CHIP_SIZE,
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  dateChipDefault: {
    backgroundColor: colors.surfaceContainerLowest,
  },
  dateChipSelected: {
    backgroundColor: colors.inverseSurface,
  },
  dateNumber: {
    ...typography.titleSm,
    color: colors.onSurface,
  },
  dateNumberSelected: {
    color: colors.inverseOnSurface,
  },
});
