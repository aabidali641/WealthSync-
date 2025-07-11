import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// Define default values
const DEFAULT_VALUES = {
  userName: "User",
  type: "monthly-report",
  data: {
    month: "Current Month",
    stats: {
      totalIncome: 0,
      totalExpenses: 0,
      byCategory: {},
    },
    insights: [],
  },
};

export default function EmailTemplate({
  userName = DEFAULT_VALUES.userName,
  type = DEFAULT_VALUES.type,
  data = DEFAULT_VALUES.data,
}) {
  // Ensure stats exists with default values
  const stats = data.stats || DEFAULT_VALUES.data.stats;

  // Calculate net amount safely
  const netAmount = (stats.totalIncome || 0) - (stats.totalExpenses || 0);

  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>
              {data.month || DEFAULT_VALUES.data.month} Financial Report
            </Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here's your financial summary for{" "}
              {data.month || DEFAULT_VALUES.data.month}:
            </Text>

            {/* Main Stats with safe access */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Total Income</Text>
                <Text style={styles.statValue}>
                  ${(stats.totalIncome || 0).toLocaleString()}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Total Expenses</Text>
                <Text style={styles.statValue}>
                  ${(stats.totalExpenses || 0).toLocaleString()}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Net</Text>
                <Text
                  style={{
                    ...styles.statValue,
                    color: netAmount >= 0 ? "#10B981" : "#EF4444",
                  }}
                >
                  ${netAmount.toLocaleString()}
                </Text>
              </div>
            </Section>

            {/* Safely render categories if they exist */}
            {stats.byCategory && Object.keys(stats.byCategory).length > 0 && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>
                  Expenses by Category
                </Heading>
                {Object.entries(stats.byCategory).map(([category, amount]) => (
                  <div key={category} style={styles.categoryRow}>
                    <Text style={styles.categoryName}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Text>
                    <Text style={styles.categoryAmount}>
                      ${amount.toLocaleString()}
                    </Text>
                  </div>
                ))}
              </Section>
            )}

            {/* Safely render insights if they exist */}
            {data.insights && data.insights.length > 0 && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>
                  Financial Insights
                </Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.insightText}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using our financial tracking service.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  // Handle other email types here...

  return null;
}

// Keep your existing styles object
const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  // ... rest of your styles
};
