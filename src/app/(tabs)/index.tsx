import WeekCalendar from "@/components/WeekCalendar";
import { borderRadius, colors, spacing, typography } from "@/constants/theme";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerGreetingText}>Morning, Sanket</Text>
                <Text style={styles.headerDateText}>
                    {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </Text>
            </View>

            {/* Dis0lay week day calender */}
            <WeekCalendar
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
            />

            {/* Dislay set new habit container */}
            <View style={styles.habitContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Set New Habit
                    </Text>

                    <Text style={styles.description}>
                        Never miss your daily routine! Set a reminder to stay on track
                    </Text>
                </View>

                <Image style={styles.icon} source={require("@/assets/content/bellIcon.png")} />
            </View>

            {/* Add new Habit button */}
            <Pressable style={styles.addButton}>
                <Ionicons name="add" size={24} color="black" />
            </Pressable>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.innerPadding,
        backgroundColor: colors.background,
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: spacing.sectionGap,
        gap: spacing.base,
    },
    headerGreetingText: {
        ...typography.displayLg,
        color: colors.onBackground,
    },
    headerDateText: {
        ...typography.titleSm,
        color: colors.onBackground,
    },
    habitContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: spacing.sectionGap,
        gap: spacing.base,
        marginTop: spacing.cardGap,
        backgroundColor: colors.inversePrimary,
        padding: spacing.innerPadding,
        borderRadius: borderRadius.md,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: spacing.base,
        flexWrap: "wrap",
        width: "65%"
    },
    title: {
        ...typography.headlineMdMobile,
        color: colors.onPrimaryContainer,
    },
    description: {
        ...typography.labelSm,
        color: colors.onPrimaryContainer,
    },
    icon: {
        width: 100,
        height: 100
    },
    addButton: {
        position: "absolute",
        bottom: spacing.innerPadding,
        right: spacing.innerPadding,
        width: 56,
        height: 56,
        borderRadius: borderRadius.full,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primaryContainer,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
