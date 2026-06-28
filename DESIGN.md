---
name: Vitality Gold
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#414844'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727974'
  outline-variant: '#c1c8c3'
  surface-tint: '#466557'
  primary: '#00160e'
  on-primary: '#ffffff'
  primary-container: '#0d2c21'
  on-primary-container: '#759586'
  inverse-primary: '#adcebe'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1b1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#362300'
  on-tertiary-container: '#a98955'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ead9'
  primary-fixed-dim: '#adcebe'
  on-primary-fixed: '#012016'
  on-primary-fixed-variant: '#2f4d40'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#e6c188'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5b4215'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The design system for Poshan Nutraceuticals is rooted in the intersection of organic wellness and high-performance science. It targets health-conscious individuals who seek premium, trustworthy supplementation. The visual language evokes a sense of "prestige health"—combining the stability of pharmaceutical standards with the energy of peak physical performance.

The chosen style is **Corporate / Modern** with a **Minimalist** lean. It leverages large amounts of white space to suggest purity and clarity, punctuated by rich, deep colors and metallic accents that signal luxury and high value. The interface should feel expansive, clean, and meticulously organized, providing a frictionless experience that mirrors the desired efficiency of the products themselves.

## Colors

The palette is derived directly from the core brand identity. 
- **Deep Forest Green (#0D2C21):** Acts as the primary anchor, used for headers, primary buttons, and critical text. It represents growth, stability, and professional reliability.
- **Burnished Gold (#C5A059):** The secondary color, used for accents, highlights, and "premium" indicators. It should be used sparingly to maintain its impact.
- **Bronze Earth (#8C6E3D):** A tertiary shade for depth, gradients, and secondary call-to-actions.
- **Off-White (#F9F9F7):** The primary background surface, providing a softer, more sophisticated look than pure white while ensuring high legibility.

Use a "Gold Gradient" for hero elements and countdown timers to simulate a metallic sheen, transitioning from `#C5A059` to `#E6CF9C` and back to `#8C6E3D`.

## Typography

The system utilizes two complementary sans-serifs. **Manrope** is used for headlines and labels to provide a structured, modern, and high-end feel. Its geometric nature scales beautifully for large-scale product displays and countdowns. 

**Hanken Grotesk** is used for body copy and nutritional details. It is highly legible even at smaller sizes, ensuring that ingredient lists and "Supplement Facts" remain accessible and professional. 

For the "Coming Soon" announcement, use the `display-lg` style with tight letter spacing to create a sense of impactful urgency.

## Layout & Spacing

The system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

A high-end feel is achieved through generous vertical padding (Section Gaps). Content should never feel crowded. Product showcases should use an asymmetrical layout where large-scale product photography overlaps column boundaries, creating a dynamic, energetic sense of depth.

For the 'Coming Soon' layout, center the content both vertically and horizontally within the viewport, utilizing a "safe zone" of 10% margins on all sides to ensure the countdown remains the focal point across all devices.

## Elevation & Depth

Hierarchy is established primarily through **Tonal Layers** and **Ambient Shadows**.

1.  **Base Layer:** The off-white background surface.
2.  **Product Cards:** Use a very subtle, extra-diffused shadow (`0px 10px 30px rgba(13, 44, 33, 0.05)`) to make products appear as if they are floating slightly above the surface.
3.  **Floating Announcements:** Use semi-transparent backgrounds with a backdrop-blur (10px) to create a glass-like effect for "coming soon" overlays or floating discount chips.
4.  **Interaction:** Buttons should transition from a flat state to a slightly lifted state with a Gold-tinted shadow on hover to signal interactivity and value.

## Shapes

The design system uses **Soft** geometry. Standard UI elements like buttons and input fields utilize a `0.25rem` radius. This maintains a professional, "nutraceutical" precision while avoiding the harshness of sharp corners. 

Product containers and feature cards may use `rounded-lg` (0.5rem) to feel more approachable. Circular shapes are reserved exclusively for status indicators, "54 Servings" badges, and the human element within the logo icon.

## Components

### Buttons
- **Primary:** Deep Forest Green background, White text, 0.25rem radius.
- **Secondary:** Transparent with a 1px Gold border and Gold text.
- **Action:** Solid Gold background with Deep Green text for high-energy calls to action.

### Product Showcase Cards
Cards should be borderless with a soft ambient shadow. Product titles use `headline-md` in Deep Forest Green. Key benefits (e.g., "25g Protein") should be displayed in small, Gold-bordered chips.

### Coming Soon Countdown
The countdown digits should use `display-lg` in a Gold-to-Bronze gradient. Each time unit (Days, Hours, Mins) should sit inside a subtle, semi-transparent Deep Green container with a backdrop blur.

### Nutritional Tables
Inspired by "Supplement Facts" labels, these should be clean, using `body-md` for text and thin 1px lines (`#D1D1D1`). Use bold weights for key values to ensure transparency and trust.

### Announcement Banner
A slim bar at the top of the viewport in Deep Forest Green with Gold `label-bold` text, used for "New Launch" or "Shipping Information."