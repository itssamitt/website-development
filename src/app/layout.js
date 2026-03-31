import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Adsman - Bussiness Growth Solutions & Web Development",
  description:
    "Professional web development, e-commerce solutions, and custom apps for startups and enterprises. 500+ happy clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17939214773"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17939214773');

            window.trackAdsmanConversion = function(eventLabel, url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17939214773/JOIoCLOzopEcELXjiupC',
                'event_label': eventLabel || 'general',
                'event_callback': callback
              });
              return false;
            };

            window.gtag_report_conversion = function(url) {
              return window.trackAdsmanConversion('manual', url);
            };

            document.addEventListener('click', function (event) {
              var target = event.target;
              if (!target) return;
              var link = target.closest('a[href]');
              if (!link) return;

              var href = (link.getAttribute('href') || '').toLowerCase();
              if (
                href.indexOf('wa.me') !== -1 ||
                href.indexOf('api.whatsapp.com') !== -1 ||
                href.indexOf('wa.link') !== -1 ||
                href.indexOf('whatsapp') !== -1
              ) {
                window.trackAdsmanConversion('whatsapp_click');
              }

              if (href.indexOf('tel:') === 0) {
                window.trackAdsmanConversion('call_click');
              }
            }, true);

            document.addEventListener('submit', function (event) {
              var form = event.target;
              if (!form || form.tagName !== 'FORM') return;
              window.trackAdsmanConversion('form_submit');
            }, true);
          `}
        </Script>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
