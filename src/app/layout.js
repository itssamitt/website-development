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
        {/* ✅ GA4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4TY8M4B8E3"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);}
            
            window.gtag('js', new Date());
            window.gtag('config', 'G-4TY8M4B8E3');
          `}
        </Script>

        {/* ✅ WhatsApp Click Tracking */}
        <Script id="whatsapp-click-tracker" strategy="afterInteractive">
          {`
            function trackWhatsAppClick(url, eventLabel) {
              var callback = function () {
                if (typeof url === 'string') window.location = url;
              };

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'whatsapp_click', {
                  event_category: 'contact',
                  event_label: eventLabel || 'whatsapp_click',
                  event_callback: callback,
                  event_timeout: 2000
                });
              } else {
                callback();
              }
            }

            document.addEventListener('click', function (event) {
              var target = event.target.closest('[data-whatsapp-track]');
              if (!target) return;

              var url = target.getAttribute('href');
              var label = target.getAttribute('data-whatsapp-label') || 'whatsapp_click';

              if (!url) return;

              event.preventDefault();
              trackWhatsAppClick(url, label);
            });
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