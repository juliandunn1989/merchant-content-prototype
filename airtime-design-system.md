# Airtime Design System Reference

## Critical: This is NOT a Generic App

The Airtime app has a distinctive visual language. This document captures the specific patterns that make it feel like Airtime, not a generic fintech/rewards app. **Follow these patterns exactly.**

---

## Brand Personality

Airtime feels: **Confident, Premium, Friendly, Energetic**

It does NOT feel: Corporate, Sterile, Cluttered, Cheap

The app uses bold typography, generous white space, and strategic pops of orange. It's clean but not minimal—there's visual richness through photography and brand imagery.

---

## Color Palette (Exact Values)

### Primary Colors
```css
--airtime-orange: #FF6633;        /* Primary CTAs, reward badges, key actions */
--airtime-orange-light: #FFF0EB;  /* Orange tinted backgrounds */
```

### Secondary Colors  
```css
--airtime-blue: #5DADE2;          /* Secondary rewards, info cards (like Argos) */
--airtime-blue-light: #E8F4FC;    /* Blue tinted backgrounds */
```

### Accent Colors
```css
--airtime-green: #2ECC71;         /* Success states, checkmarks, "unlocked" */
--airtime-pink: #FFB6C1;          /* "FOR YOU" badges, promotional tags */
--airtime-yellow: #F4D03F;        /* Lightning bolt, streaks, gamification */
```

### Neutrals
```css
--background: #FFFFFF;
--surface: #F7F7F7;               /* Section backgrounds, cards */
--surface-elevated: #FFFFFF;      /* Cards on grey backgrounds */
--text-primary: #1A1A1A;          /* Headlines, primary text */
--text-secondary: #666666;        /* Body text, descriptions */
--text-tertiary: #999999;         /* Captions, hints */
--border: #E5E5E5;                /* Subtle dividers */
```

### Special: "Exclusive Offers" Gradient
The orange section on the homescreen uses:
```css
background: linear-gradient(180deg, #FF6633 0%, #FF8C66 100%);
```

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
```

### Type Scale

**Retailer Names / Section Headers**
```css
font-size: 14px;
font-weight: 800;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #1A1A1A;
```
Examples: "BOOTS", "ARGOS", "SPOTLIGHT", "NEW RETAILERS"

**Reward Percentages (Large)**
```css
font-size: 28px;
font-weight: 700;
color: white; /* on orange */ or #1A1A1A /* on blue */
```

**Reward Percentages (Medium)**
```css
font-size: 18px;
font-weight: 700;
```

**Body Text / Descriptions**
```css
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #666666;
```

**Small Labels**
```css
font-size: 11px;
font-weight: 600;
letter-spacing: 0.3px;
text-transform: uppercase;
color: #999999;
```
Examples: "PENDING PERIOD", "Base Reward"

**Button Text**
```css
font-size: 14px;
font-weight: 700;
letter-spacing: 0.5px;
text-transform: uppercase;
```

---

## Component Patterns

### 1. Logo Circles

Retailer logos sit in white circles that overlap hero images:

```css
.logo-circle {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  /* Positioned to overlap hero by ~40px */
  margin-top: -40px;
  position: relative;
  z-index: 10;
}
```

### 2. Reward Cards (Orange Style - for Exclusive/Flash offers)

```css
.reward-card-orange {
  background: #FF6633;
  border-radius: 12px;
  padding: 16px;
  margin: 0 16px;
}

.reward-card-orange .percentage {
  font-size: 28px;
  font-weight: 700;
  color: white;
}

.reward-card-orange .label {
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}

.reward-card-orange .sublabel {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

/* Inner highlight bar for time-sensitive info */
.reward-card-orange .highlight-bar {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 8px 16px;
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: white;
}
```

### 3. Reward Cards (Blue Style - for Standard offers)

```css
.reward-card-blue {
  background: #E8F4FC;
  border-radius: 12px;
  padding: 16px;
  margin: 0 16px;
}

.reward-card-blue .percentage-box {
  background: #5DADE2;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-weight: 700;
}

.reward-card-blue .tags {
  /* "In-Store" / "Online" pills */
  background: rgba(93, 173, 226, 0.3);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  color: #1A1A1A;
}
```

### 4. Channel Tags ("In-Store" / "Online")

These appear on reward cards:

```css
.channel-tag {
  background: rgba(255, 255, 255, 0.3); /* on orange cards */
  /* OR */
  background: rgba(93, 173, 226, 0.3);  /* on blue cards */
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
}
```

### 5. Status Badges

**"FLASH" / "LIMITED TIME" badge:**
```css
.badge-flash {
  background: #F4D03F;
  color: #1A1A1A;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 4px;
  position: absolute;
  top: 16px;
  right: 16px;
}
```

**"FOR YOU" badge (pink):**
```css
.badge-for-you {
  background: #FFB6C1;
  color: #1A1A1A;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
}
```

**"UP" badge (appears after retailer names):**
```css
.badge-up {
  background: #FF6633;
  color: white;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 10px;
  margin-left: 6px;
  vertical-align: middle;
}
```

### 6. Primary CTA Buttons

```css
.button-primary {
  background: #FF6633;
  color: white;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 16px 24px;
  border-radius: 30px;  /* Very rounded - pill shape */
  width: 100%;
  border: none;
  box-shadow: 0 2px 8px rgba(255, 102, 51, 0.3);
}
```

### 7. Secondary CTA Buttons

```css
.button-secondary {
  background: #5DADE2;
  color: white;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 16px 24px;
  border-radius: 30px;
  width: 100%;
  border: none;
}
```

### 8. Outlined Buttons (on dark backgrounds)

```css
.button-outlined {
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 14px 24px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.8);
}
```

### 9. Search Bar

```css
.search-bar {
  background: #F7F7F7;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px;
}

.search-bar input {
  background: transparent;
  border: none;
  font-size: 15px;
  color: #999999;
  flex: 1;
}

.search-bar .icon {
  color: #999999;
  width: 20px;
  height: 20px;
}
```

### 10. Quick Access Pills (horizontal scroll)

```css
.quick-access-container {
  display: flex;
  gap: 12px;
  padding: 0 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.quick-access-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 72px;
}

.quick-access-pill .icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px dashed #5DADE2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.quick-access-pill .label {
  font-size: 12px;
  color: #1A1A1A;
  text-align: center;
}
```

### 11. Retailer Cards (Spotlight/horizontal scroll)

```css
.retailer-card {
  width: 160px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
}

.retailer-card .image {
  height: 160px;
  width: 100%;
  object-fit: cover;
  position: relative;
}

.retailer-card .logo-overlay {
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Green checkmark for "card linked" */
.retailer-card .linked-indicator {
  position: absolute;
  bottom: 8px;
  left: 44px;
  width: 18px;
  height: 18px;
  background: #2ECC71;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.retailer-card .name {
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 12px 12px 4px;
}

.retailer-card .reward {
  font-size: 12px;
  color: #666666;
  padding: 0 12px 12px;
}
```

### 12. Section Headers

```css
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px;
}

.section-header .title {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #1A1A1A;
}

.section-header .arrow {
  width: 20px;
  height: 20px;
  color: #1A1A1A;
}
```

### 13. Bottom Navigation

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #E5E5E5;
  display: flex;
  justify-content: space-around;
  padding: 8px 0 24px; /* Extra bottom padding for safe area */
}

.bottom-nav .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #999999;
  font-size: 10px;
  font-weight: 500;
}

.bottom-nav .item.active {
  color: #1A1A1A;
}

.bottom-nav .item .icon {
  width: 24px;
  height: 24px;
}
```

### 14. Back Button (on detail pages)

```css
.back-button {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
}
```

### 15. Favorite Heart Button

```css
.favorite-button {
  width: 40px;
  height: 40px;
  background: #F7F7F7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorite-button.active {
  background: #FFEEEE;
}

.favorite-button .heart {
  color: #FF6B6B;
}
```

### 16. Pending Period Display

```css
.pending-period {
  text-align: center;
  padding: 24px;
  background: #F7F7F7;
  border-radius: 0 0 12px 12px;
}

.pending-period .label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 8px;
}

.pending-period .value {
  font-size: 20px;
  font-weight: 700;
  color: #1A1A1A;
}

/* Optional: with UP badge */
.pending-period .value-with-badge {
  background: #1A1A1A;
  color: white;
  border-radius: 20px;
  padding: 8px 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

---

## Layout Principles

### Spacing Scale
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

### Page Margins
- Standard horizontal padding: `16px`
- Cards should have internal padding: `16px`
- Sections separated by: `24px` vertical space

### Border Radius Scale
```css
--radius-sm: 8px;    /* Small elements, tags */
--radius-md: 12px;   /* Cards, search bar */
--radius-lg: 16px;   /* Large cards */
--radius-full: 9999px; /* Pills, buttons, circles */
```

---

## Specific Airtime Quirks to Replicate

1. **Retailer names are ALWAYS uppercase** with wide letter-spacing

2. **The "UP" orange badge** appears inline after retailer names that have exclusive offers

3. **Reward percentages** are displayed BIG and BOLD—they're the hero of reward cards

4. **"Visa Only" indicators** use the actual Visa logo in a small blue pill

5. **Hero images on detail pages** extend full-width with no margin, and the logo circle overlaps them

6. **The bottom CTA** ("VISIT WEBSITE" / "START EARNING") is sticky and has generous bottom padding for the home indicator

7. **Location prompts** use a large outlined arrow icon (navigation/send style) centered above the text

8. **Green checkmarks** indicate "card linked" status and appear as small circles overlapping retailer logos

9. **The header bar** on homescreen has the "AIRTIME UP" logo (orange outline, pill shape) on the left, and status icons (lock, lightning, chat) on the right in a dark rounded container

10. **Horizontal scroll sections** have no visible scrollbar but respond to touch/swipe

---

## Switch & Save Specific Styling

For the new Switch & Save module, use these distinctive patterns:

### Module Background
Use a subtle gradient to differentiate from standard white cards:
```css
background: linear-gradient(135deg, #F8F0FF 0%, #F0F7FF 100%);
/* Light purple to light blue - suggests "smart" / "personalized" */
```

### "SWITCH & SAVE" Badge
```css
.switch-save-badge {
  background: #1A1A1A;
  color: white;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 20px;
}
```

### Spend Reference Text
```css
.spend-reference {
  font-size: 15px;
  font-weight: 600;
  color: #1A1A1A;
}

.spend-amount {
  color: #FF6633; /* Highlight the £ amount */
}
```

### Open Banking Disclosure
```css
.ob-disclosure {
  font-size: 11px;
  color: #999999;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
}

.ob-disclosure .info-icon {
  width: 14px;
  height: 14px;
}
```

---

## Assets Reference

### Icons to Use (Lucide React)
- `ArrowLeft` - Back navigation
- `Heart` - Favorites
- `X` - Dismiss/close
- `MapPin` - Location
- `Navigation` - Location prompt (the arrow icon)
- `Truck` - Delivery
- `Store` - Stores
- `CreditCard` - Payment
- `Info` - Information
- `Check` - Checkmarks
- `ChevronRight` - Section arrows
- `Search` - Search bar
- `Home`, `PlusCircle`, `Wallet`, `Star`, `MoreHorizontal` - Bottom nav
- `Lock`, `Zap`, `MessageCircle` - Header icons

### Payment Provider Logos
Style as simple text in rounded rectangles if images unavailable:
```css
.payment-logo {
  background: #F7F7F7;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
}
```

---

## Final Checklist

Before considering the prototype complete, verify:

- [ ] All retailer names are uppercase with letter-spacing
- [ ] Orange (#FF6633) is used for primary CTAs and exclusive offers
- [ ] Blue (#5DADE2) is used for secondary/standard offers
- [ ] Buttons are pill-shaped (border-radius: 30px)
- [ ] Reward percentages are prominently sized (28px+)
- [ ] Logo circles have subtle shadows and overlap hero images
- [ ] Section headers are uppercase with right arrows
- [ ] The app feels premium and confident, not generic
- [ ] White space is generous—nothing feels cramped
- [ ] Typography hierarchy is clear and consistent
