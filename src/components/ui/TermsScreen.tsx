import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_TABLET, ms } from '../../utils/responsive';

interface TermsScreenProps {
  onBack: () => void;
  onPrivacy: () => void;
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

export default function TermsScreen({ onBack, onPrivacy }: TermsScreenProps) {
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
        <Text style={styles.headerEmoji}>📋</Text>
        <Text style={styles.headerTitle} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>Terms & Conditions</Text>
        <Text style={styles.headerDate}>Last updated: {LAST_UPDATED}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 40 }]} showsVerticalScrollIndicator={false}>

        {/* Summary box */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>
            📌 <Text style={styles.bold}>Please read these Terms carefully.</Text> By downloading or using ColorSpark, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the App.
          </Text>
        </View>

        <Section title="1. Acceptance of Terms" color="#FF5E5E">
          <P>These Terms and Conditions ("Terms") govern your use of the ColorSpark mobile application ("App") operated by ColorSpark ("we", "us", "our"). By accessing or using the App, you agree to these Terms. If you are using the App on behalf of a minor, you (the parent or guardian) agree to these Terms on behalf of that minor.</P>
        </Section>

        <Section title="2. License to Use the App" color="#FF9500">
          <P>We grant you a limited, non-exclusive, non-transferable, revocable license to download and use ColorSpark for personal, non-commercial purposes on a device you own or control, in accordance with these Terms.</P>
          <P>You may not:</P>
          <Bullet>Copy, modify, or create derivative works of the App</Bullet>
          <Bullet>Reverse engineer, decompile, or disassemble the App</Bullet>
          <Bullet>Sell, resell, transfer, or sublicense the App</Bullet>
          <Bullet>Use the App for any commercial purpose without our written consent</Bullet>
          <Bullet>Remove any copyright or proprietary notices from the App</Bullet>
        </Section>

        <Section title="3. Eligibility & Parental Consent" color="#FFD700">
          <P>ColorSpark is suitable for users of all ages. The App is specifically designed to be safe for children and does not contain inappropriate content, in-app purchases, advertising, or social features.</P>
          <P>If you are under 13 years of age, please ensure a parent or guardian has reviewed and agreed to these Terms before you use the App. Parents and guardians are responsible for monitoring their child's use of the App.</P>
        </Section>

        <Section title="4. Intellectual Property" color="#4CD964">
          <P>All content within the App — including but not limited to artwork, images, sounds, graphics, user interface elements, and the ColorSpark name and logo — is owned by or licensed to us and is protected by copyright, trademark, and other intellectual property laws.</P>
          <P>You retain no intellectual property rights in the App content by virtue of using the App. You may not use our trademarks, logos, or brand elements without prior written permission.</P>
        </Section>

        <Section title="5. User Conduct" color="#34AADC">
          <P>ColorSpark is an offline single-player game. By using the App, you agree to:</P>
          <Bullet>Use the App only for lawful purposes and in accordance with these Terms</Bullet>
          <Bullet>Not attempt to hack, exploit, or disrupt the App in any way</Bullet>
          <Bullet>Not use any automated means to access or manipulate the App</Bullet>
          <Bullet>Not use the App in a manner that could damage, disable, or impair it</Bullet>
        </Section>

        <Section title="6. Disclaimer of Warranties" color="#9B59B6">
          <P>The App is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to:</P>
          <Bullet>Implied warranties of merchantability or fitness for a particular purpose</Bullet>
          <Bullet>Warranties that the App will be uninterrupted, error-free, or free of viruses</Bullet>
          <Bullet>Warranties regarding the accuracy or reliability of any content in the App</Bullet>
          <P>We do not warrant that defects in the App will be corrected, or that the App or its servers are free of viruses or other harmful components.</P>
        </Section>

        <Section title="7. Limitation of Liability" color="#FF5E5E">
          <P>To the maximum extent permitted by applicable law, in no event shall ColorSpark, its developers, officers, employees, or affiliates be liable for:</P>
          <Bullet>Any indirect, incidental, special, consequential, or punitive damages</Bullet>
          <Bullet>Loss of profits, data, goodwill, or other intangible losses</Bullet>
          <Bullet>Damages arising from your use or inability to use the App</Bullet>
          <Bullet>Any unauthorized access to or alteration of your data</Bullet>
          <P>Our total liability to you for all claims arising from the use of the App shall not exceed the amount you paid (if any) to download the App in the past 12 months.</P>
        </Section>

        <Section title="8. App Updates & Availability" color="#FF9500">
          <P>We reserve the right to modify, suspend, or discontinue the App or any part of it at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.</P>
          <P>We may release updates to the App from time to time to improve functionality, fix bugs, or add new features. We encourage you to keep the App updated to the latest version.</P>
        </Section>

        <Section title="9. Third-Party Platforms" color="#4CD964">
          <P>The App is distributed through the Apple App Store and Google Play Store. Your use of these platforms is subject to their respective terms of service.</P>
          <P>We are not responsible for any issues arising from your use of these third-party platforms.</P>
        </Section>

        <Section title="10. Governing Law" color="#34AADC">
          <P>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</P>
        </Section>

        <Section title="11. Changes to These Terms" color="#9B59B6">
          <P>We reserve the right to update or modify these Terms at any time. When we do, we will update the "Last Updated" date at the top of this page. Your continued use of the App after any changes constitutes your acceptance of the revised Terms.</P>
          <P>We encourage you to review these Terms periodically to stay informed of any changes. If you do not agree to the revised Terms, please discontinue use of the App.</P>
        </Section>

        <Section title="12. Contact Us" color="#FF5E5E">
          <P>If you have any questions about these Terms and Conditions, please contact us:</P>
          <TouchableOpacity style={styles.contactBox} onPress={() => Linking.openURL('mailto:aditya159121@gmail.com')} activeOpacity={0.75}>
            <Text style={styles.contactName}>ColorSpark Support</Text>
            <Text style={styles.contactEmail}>aditya159121@gmail.com</Text>
            <Text style={styles.contactTap}>Tap to email ↗</Text>
          </TouchableOpacity>
          <P>We aim to respond to all inquiries within 5 business days.</P>
        </Section>

        {/* Bottom nav */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={onPrivacy} activeOpacity={0.75}>
            <Text style={styles.navLinkBlue}>← Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.navDivider}>|</Text>
          <TouchableOpacity onPress={onBack} activeOpacity={0.75}>
            <Text style={styles.navLinkOrange}>Back to Menu →</Text>
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
    backgroundColor: '#F7F0FF',
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
    backgroundColor: '#F7F0FF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D9B8F5',
  },
  summaryText: { fontSize: ms(13), color: '#9B59B6', lineHeight: ms(20) },

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
  navLinkBlue: { fontSize: ms(14), fontWeight: '700', color: '#34AADC' },
  navLinkOrange: { fontSize: ms(14), fontWeight: '700', color: '#FF6B35' },
  navDivider: { color: '#D1D5DB', fontSize: ms(16) },
});
