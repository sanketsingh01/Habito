import { borderRadius, colors, spacing, typography } from "@/constants/theme";
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Image, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmojiPicker from 'rn-emoji-keyboard';

const createHabit = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState('😃');
    const [habitName, setHabitName] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

    const handlePick = (emojiObject: any) => {
        setChosenEmoji(emojiObject.emoji);
    };

    const onChange = (event: any, selectedDate?: Date) => {
        // On Android, the picker closes immediately after choice/dismissal
        if (Platform.OS === 'android') {
            setShow(false);
        }

        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <SafeAreaView style={styles.conatiner}>
            {/* Header */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={styles.headerTitle}>New Habit</Text>
                <Pressable style={styles.iconButton} onPress={() => router.back()}>
                    <Ionicons name="close" size={22} color={colors.onSurface} />
                </Pressable>
            </View>

            {/* Image Section */}
            <View style={styles.imageSection}>
                <Image style={styles.calenderLogo} source={require("@/assets/content/calender_logo.png")} />
            </View>

            {/* Form to create new habit */}
            <View style={styles.form}>
                {/* Enter habit name */}
                <View style={styles.field}>
                    <Text style={styles.label}>Habit name</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter habit name"
                        placeholderTextColor={colors.onSurfaceVariant}
                        value={habitName}
                        onChangeText={setHabitName}
                    />
                </View>

                <View style={styles.inlineRow}>
                    {/* Choose emoji */}
                    <View style={styles.inlineField}>
                        <Text style={styles.label}>Choose emoji</Text>
                        <Pressable style={styles.emojiPickerButton} onPress={() => setIsOpen(true)}>
                            <Text style={styles.emojiDisplay}>{chosenEmoji}</Text>
                        </Pressable>
                    </View>

                    {/* set goal date input */}
                    <View style={styles.inlineField}>
                        <Text style={styles.label}>Set goal</Text>
                        <Pressable style={styles.inputPicker} onPress={showDatePicker}>
                            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                        </Pressable>
                    </View>
                </View>

                <EmojiPicker
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onEmojiSelected={handlePick}
                />

                {/* Conditionally rendered Native Date Picker */}
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        onChange={onChange}
                        // 'spinner', 'default', 'clock', 'calendar' (Depends on OS)
                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    />
                )}

                {/* Choose frequency option */}
                <View style={styles.field}>
                    <Text style={styles.label}>Set frequency</Text>
                    <View style={styles.frequencyRow}>
                        <Pressable
                            style={[
                                styles.frequencyButton,
                                frequency === 'daily' && styles.frequencyButtonActive,
                            ]}
                            onPress={() => setFrequency('daily')}
                        >
                            <Text
                                style={[
                                    styles.frequencyText,
                                    frequency === 'daily' && styles.frequencyTextActive,
                                ]}
                            >
                                Daily
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.frequencyButton,
                                frequency === 'weekly' && styles.frequencyButtonActive,
                            ]}
                            onPress={() => setFrequency('weekly')}
                        >
                            <Text
                                style={[
                                    styles.frequencyText,
                                    frequency === 'weekly' && styles.frequencyTextActive,
                                ]}
                            >
                                Weekly
                            </Text>
                        </Pressable>
                    </View>
                </View>

                {/* Create habit button */}
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>Create Goal</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default createHabit

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: spacing.innerPadding,
        backgroundColor: colors.background,
    },
    headerTitle: {
        ...typography.displayLg,
        color: colors.onBackground,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: borderRadius.chip,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surfaceContainerHighest,
        borderWidth: borderRadius.sm,
        borderColor: colors.onSurface,
    },
    imageSection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: spacing.cardGap,
    },
    calenderLogo: {
        width: 130,
        height: 130,
    },
    form: {
        gap: spacing.cardGap,
        marginTop: spacing.sectionGap,
    },
    field: {
        gap: spacing.base,
    },
    label: {
        ...typography.labelSm,
        color: colors.onSurfaceVariant,
    },
    textInput: {
        ...typography.bodyMd,
        minHeight: 52,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: borderRadius.chip,
        paddingHorizontal: spacing.innerPadding,
        color: colors.onSurface,
        backgroundColor: colors.surfaceContainerLowest,
    },
    inlineRow: {
        flexDirection: "row",
        gap: spacing.cardGap,
        alignItems: "flex-start",
    },
    inlineField: {
        flex: 1,
        gap: spacing.base,
    },
    emojiPickerButton: {
        minHeight: 56,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: borderRadius.chip,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surfaceContainerLowest,
    },
    emojiDisplay: {
        fontSize: 28,
    },
    button: {
        minHeight: 54,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.innerPadding,
        borderRadius: borderRadius.full,
        marginTop: spacing.base,
    },
    buttonText: {
        ...typography.titleSm,
        color: colors.onPrimary,
    },
    inputPicker: {
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: borderRadius.chip,
        minHeight: 56,
        paddingHorizontal: spacing.innerPadding,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surfaceContainerLowest,
    },
    dateText: {
        ...typography.bodyMd,
        color: colors.onSurface,
    },
    frequencyRow: {
        flexDirection: "row",
        gap: spacing.base,
    },
    frequencyButton: {
        flex: 1,
        minHeight: 48,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: borderRadius.full,
        backgroundColor: colors.surfaceContainerLowest,
    },
    frequencyButtonActive: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
    },
    frequencyText: {
        ...typography.titleSm,
        color: colors.onSurface,
    },
    frequencyTextActive: {
        color: colors.onPrimary,
    },
})
