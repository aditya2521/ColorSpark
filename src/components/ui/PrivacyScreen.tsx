import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_TABLET, ms } from '../../utils/responsive';

interface PrivacyScreenProps {
  onBack: () => void;
  onTerms: () => void;
}

const RAINBOW = ['#FF4D4D', '#FF8C00', '#FFD700', '#4CAF50', '#2196F3', '#9C27B0'];
const LAST_UPDATED = 'July 26, 2026';

interface SectionProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

function Section({ title, color, children }: SectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleRow}>
        <View style={[styles.sectionBar, { backgroundColor: color }]} />
        <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
      </View>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <Text style={styles.bodyText}>{children}</Text>;
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export default function PrivacyScreen({ onBack, onTerms }: PrivacyScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* Rainbow stripe */}
      <View style={styles.rainbowStripe}>
        {RAINBOW.map(c => <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />)}
      </View>

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <TouchableOpacity style={[styles.backBtn, { top: insets.top + 8 }]} onPress={onBack} activeOpacity={0.75}>
          <Text style={styles.backBtnText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerEmoji}>🔒</Text>
        <Text style={styles.headerTitle} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>Privacy Policy</Text>
        <Text style={styles.headerDate}>Last updated: {LAST_UPDATED}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 40 }]} showsVerticalScrollIndicator={false}>

        {/* Summary box */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>
            📋 <Text style={styles.bold}>Summary:</Text> ColorSpark is designed for children and takes privacy very seriously. We do not collect personal information from users. The app functions entirely offline. This policy explains what minimal data is stored locally on your device.
          </Text>
        </View>

        <Section title="1. About ColorSpark" color="#FF5E5E">
          <P>ColorSpark ("the App", "we", "our") is a color-by-number game developed for iOS and Android devices. This Privacy Policy explains how we handle information in connection with your use of the App.</P>
          <P>ColorSpark is intended for users of all ages, including children. We are committed to protecting the privacy of all our users, especially children.</P>
        </Section>

        <Section title="2. Information We Do Not Collect" color="#FF9500">
          <P>ColorSpark does <Text style={styles.bold}>not</Text> collect, transmit, or store any of the following:</P>
          <Bullet>Personal information (name, email address, phone number)</Bullet>
          <Bullet>Location data (GPS or approximate location)</Bullet>
          <Bullet>Device identifiers (advertising ID, IDFA, GAID)</Bullet>
          <Bullet>Usage analytics or behavioral data</Bullet>
          <Bullet>Photos, camera, or microphone data</Bullet>
          <Bullet>Contacts or social data</Bullet>
          <Bullet>Financial or payment information</Bullet>
          <P>The App does <Text style={styles.bold}>not</Text> require an account or registration of any kind.</P>
        </Section>

        <Section title="3. Data Stored Locally on Your Device" color="#FFD700">
          <P>ColorSpark stores the following data <Text style={styles.bold}>locally on your device only</Text> using AsyncStorage. This data never leaves your device and is never transmitted to us or any third party:</P>
          <Bullet>Game progress: Which levels you have completed and your scores</Bullet>
          <Bullet>Sound preference: Whether you have enabled or disabled sound effects</Bullet>
          <Bullet>App settings: Any in-app preferences you have configured</Bullet>
          <P>This data is used solely to save your progress and preferences between sessions. You can delete this data at any time by uninstalling the App.</P>
        </Section>

        <Section title="4. Internet & Network Access" color="#4CD964">
          <P>ColorSpark is an <Text style={styles.bold}>offline-first application</Text>. All game content — images, sounds, and game logic — is bundled within the App itself. No internet connection is required to play.</P>
          <P>The App may request local network access on iOS to support the Expo development server during development builds. Production builds distributed through the App Store do not require network access.</P>
        </Section>

        <Section title="5. Children's Privacy (COPPA)" color="#34AADC">
          <P>ColorSpark complies with the Children's Online Privacy Protection Act (COPPA) and similar international children's privacy laws.</P>
          <P>We do not knowingly collect personal information from children under the age of 13. Since we collect no personal data from any user, there is nothing specific to children that we collect, process, or disclose.</P>
          <P>Parents and guardians can feel confident that ColorSpark does not:</P>
          <Bullet>Show behaviorally targeted advertising</Bullet>
          <Bullet>Include in-app purchases</Bullet>
          <Bullet>Connect children to social networks</Bullet>
          <Bullet>Share any data with third parties</Bullet>
        </Section>

        <Section title="6. Third-Party Services" color="#9B59B6">
          <P>ColorSpark does not integrate any of the following:</P>
          <Bullet>Advertising networks or ad SDKs</Bullet>
          <Bullet>Analytics services (e.g., Firebase Analytics, Mixpanel)</Bullet>
          <Bullet>Social login or social media SDKs</Bullet>
          <Bullet>Crash reporting services that transmit device data</Bullet>
          <P>The App is built with Expo / React Native. The Expo framework may include standard platform APIs, none of which transmit personal data from production builds.</P>
        </Section>

        <Section title="7. Security" color="#FF5E5E">
          <P>Since we do not collect or transmit any personal data, there is no personal data at risk of being breached. All data stored locally on your device is protected by your device's built-in security mechanisms (iOS Keychain, Android Keystore).</P>
          <P>We encourage you to keep your device software up to date to benefit from the latest security patches.</P>
        </Section>

        <Section title="8. Changes to This Policy" color="#FF9500">
          <P>We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.</P>
          <P>Continued use of the App after any changes constitutes your acceptance of the updated policy. If you do not agree with any changes, please discontinue use of the App.</P>
        </Section>

        <Section title="9. Contact Us" color="#34AADC">
          <P>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</P>
          <TouchableOpacity style={styles.contactBox} onPress={() => Linking.openURL('mailto:aditya159121@gmail.com')} activeOpacity={0.75}>
            <Text style={styles.contactName}>ColorSpark Support</Text>
            <Text style={styles.contactEmail}>aditya159121@gmail.com</Text>
            <Text style={styles.contactTap}>Tap to email ↗</Text>
          </TouchableOpacity>
          <P>We aim to respond to all inquiries within 5 business days.</P>
        </Section>

        {/* Bottom nav */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={onBack} activeOpacity={0.75}>
            <Text style={styles.navLinkOrange}>← Back to Menu</Text>
          </TouchableOpacity>
          <Text style={styles.navDivider}>|</Text>
          <TouchableOpacity onPress={onTerms} activeOpacity={0.75}>
            <Text style={styles.navLinkPurple}>Terms & Conditions →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFDF5' },

  rainbowStripe: { flexDirection: 'row', height: 5 },
  rainbowBand: { flex: 1 },

  header: {
    backgroundColor: '#EEF7FF',
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  backBtnText: { color: '#FF6B35', fontWeight: '700', fontSize: ms(14) },
  headerEmoji: { fontSize: ms(44), marginBottom: 8, textAlign: 'center' },
  headerTitle: { fontSize: ms(28), fontWeight: '900', color: '#1A1A2E', textAlign: 'center' },
  headerDate: { fontSize: ms(12), color: '#9CA3AF', marginTop: 4, textAlign: 'center' },

  scroll: { flex: 1 },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    alignSelf: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 760 : undefined,
  },

  summaryBox: {
    backgroundColor: '#EEF7FF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BAD6F0',
  },
  summaryText: { fontSize: ms(13), color: '#34AADC', lineHeight: ms(20) },

  section: { marginBottom: 24 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  sectionBar: { width: 4, height: 22, borderRadius: 2, marginRight: 10 },
  sectionTitle: { fontSize: ms(17), fontWeight: '900', flexShrink: 1 },
  sectionBody: { gap: 8 },

  bodyText: { fontSize: ms(13), color: '#4B5563', lineHeight: ms(20) },
  bold: { fontWeight: '700' },

  bulletRow: { flexDirection: 'row', paddingLeft: 4 },
  bulletDot: { fontSize: ms(13), color: '#4B5563', marginRight: 8, marginTop: 1 },
  bulletText: { fontSize: ms(13), color: '#4B5563', lineHeight: ms(20), flex: 1 },

  contactBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 14,
    marginVertical: 8,
  },
  contactName: { fontSize: ms(14), fontWeight: '700', color: '#374151' },
  contactEmail: { fontSize: ms(13), color: '#34AADC', marginTop: 2 },
  contactTap: { fontSize: ms(11), color: '#9CA3AF', marginTop: 4 },

  navRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navLinkOrange: { fontSize: ms(14), fontWeight: '700', color: '#FF6B35' },
  navLinkPurple: { fontSize: ms(14), fontWeight: '700', color: '#9B59B6' },
  navDivider: { color: '#D1D5DB', fontSize: ms(16) },
});
