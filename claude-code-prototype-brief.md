# Claude Code Prototype Brief: Switch & Save

## Overview

Build a hard-coded mobile prototype demonstrating the "Switch & Save" feature for the Airtime rewards app. This prototype shows how we use Open Banking data to proactively redirect member spend from one retailer to a competing retailer offering rewards.

**Key Change**: This is a **premium paid placement** where retailers (JD Sports) pay for prominent positioning. The homescreen module now includes rich, persuasive content that sells the retailer directly—users shouldn't need to click through to a second page to make a decision.

## What to Build

A React-based mobile prototype with two screens:

1. **Homescreen** — Showing the Switch & Save module in context
2. **Rich Retailer Detail Page** — The JD Sports "sell sheet"

## Technical Requirements

- React with Tailwind CSS
- Mobile-first (375px width, scrollable)
- Hard-coded data (no API calls)
- Smooth transitions between screens
- Sticky bottom CTA on detail page

---

## Screen 1: Homescreen

### Layout (top to bottom)

1. **Status Bar** (mock)
   - Time: 11:59
   - Signal/wifi/battery icons

2. **Header**
   - "AIRTIME UP" logo badge (orange outline, white fill)
   - Right side: Lock icon with "0", Lightning bolt with "18", Chat bubble icon

3. **Hero Carousel** (simplified)
   - Full-width image card
   - eBay logo centered
   - "FOR YOU" pink badge
   - "EBAY" text
   - "Visa Only" with Visa badge
   - "VIEW YOUR OFFER" button (white, outlined)
   - Carousel dots below

4. **Search Bar**
   - "Search products" placeholder
   - Magnifying glass icon

5. **Quick Access Pills** (horizontal scroll)
   - "Challenge" with star icon
   - "Airtime..." with TIER 2 badge
   - "Uber" with UNLOCK badge
   - "ghd" logo
   - "Kiehl's" logo
   - "ASOS" logo

6. **🆕 SWITCH & SAVE Module** ← PREMIUM PAID PLACEMENT
   ```
   ┌────────────────────────────────────────────┐
   │                                         [×]│
   │ [Hero Image - JD Sports Lifestyle Photo]  │
   │ [SWITCH & SAVE badge]                      │
   │                                            │
   │ [JD Logo] JD SPORTS            [3% badge]  │
   │          UK's leading retailer             │
   │                                            │
   │ You spent £127 at Foot Locker — earn       │
   │ rewards at JD Sports instead               │
   │                                            │
   │ [⭐⭐⭐⭐ 4.2/5]  [Pay with: Klarna,      │
   │  Trustpilot]     Clearpay, PayPal]        │
   │                                            │
   │ 🎯 40% of Airtime members shop at JD      │
   │                                            │
   │ 📍 3 stores within 20 miles of you        │
   │                                            │
   │ ⚡ CURRENT DEALS                           │
   │ 👟 Up to 50% off Nike trainers            │
   │ 🧥 50% off jackets & coats                │
   │ 🚚 Free delivery on orders over £80       │
   │                                            │
   │ [START EARNING 3% NOW] ← Primary CTA      │
   │ [VIEW FULL DETAILS] ← Secondary CTA       │
   │                                            │
   │ Based on your connected bank account    ⓘ │
   └────────────────────────────────────────────┘
   ```
   - **Premium placement**: JD Sports pays for this prominent position
   - White card with shadow (not gradient) for premium feel
   - Hero image at top showcasing JD Sports brand
   - "SWITCH & SAVE" badge overlaid on hero
   - Logo overlaps hero (Airtime signature style) - z-index fixed to prevent overlap
   - **Rich content included** (prioritized order):
     - Trust signals (Trustpilot rating) - moved to top
     - Payment options - moved to top
     - Social proof (member stat) - moved to top
     - **NEW**: Nearby stores component (green badge, location-aware)
     - Current deals/promotions (3 key offers)
   - Two CTAs: Primary action + view details
   - Dismissible but persuasive
   - **Goal**: Sell JD Sports without requiring click-through

7. **SPOTLIGHT Section**
   - Section header with arrow
   - Horizontal scroll of retailer cards (Adidas, Uber, Nike as shown)

8. **Bottom Navigation**
   - Home (active), Extras, Wallet, Rewards, More

### Interaction
- Tapping "START EARNING 3% NOW" opens JD Sports website with CLO tracking
- Tapping "VIEW FULL DETAILS" navigates to Screen 2 (full detail page)
- Tapping "×" removes the module (subtle fade-out animation)
- **Key insight**: Most users can make a decision directly from the homescreen module without needing to click through

---

## Screen 2: Rich Retailer Detail Page

### Layout (top to bottom)

1. **Hero Image**
   - Full-width lifestyle image (can use placeholder gradient with JD Sports colors - black/white)
   - Back arrow button (white circle, top left)
   - "SWITCH & SAVE" badge (top right, like "FLASH" in the Boots example)

2. **Retailer Identity**
   - JD Sports logo (centered, overlapping hero)
   - Heart/favorite icon (right side)
   - "JD SPORTS" title (bold, uppercase)
   - Tagline: "The UK's leading sports fashion retailer"

3. **Reward Card** — Orange background, prominent
   ```
   ┌────────────────────────────────────────────┐
   │  3%        Base Reward        [In-Store]   │
   │            Earn on all                     │
   │            purchases          [Online]     │
   │                                            │
   │  ✓ Your card is linked and ready          │
   └────────────────────────────────────────────┘
   ```

4. **Why Switch Section**
   ```
   WHY SWITCH FROM FOOT LOCKER?

   🚚 Free delivery on orders over £80
   👟 Up to 50% off Nike right now  
   🧥 50% off jackets and coats
   📍 500+ stores across the UK
   💳 Klarna, Clearpay & PayPal
   ```
   - Use appropriate icons or emoji
   - Card/list format with subtle background

5. **Trust Signals Section**
   ```
   TRUSTED BY AIRTIME MEMBERS

   ⭐⭐⭐⭐☆ 4.2/5 on Trustpilot

   "40% of Airtime members have shopped at JD Sports"
   ```

6. **Payment Options**
   ```
   PAYMENT OPTIONS
   
   [Klarna] [Clearpay] [PayPal] [Apple Pay]
   ```
   - Show as small logo pills/badges

7. **Pending Period**
   ```
   PENDING PERIOD
   
   45 days
   ```
   - Styled like existing Airtime pages

8. **Store Finder**
   ```
   FIND A STORE
   
   [Location icon]
   
   "Share your location to find nearby stores"
   
   [FIND STORES] — Secondary button (blue/outline)
   ```

9. **Sticky Bottom CTA**
   ```
   [START EARNING AT JD SPORTS] — Orange, full-width
   ```

### Interaction
- Back arrow returns to homescreen
- "START EARNING" could show a simple success state or link indication

---

## Design Tokens

### Colors
```css
--primary-orange: #FF6B35;
--secondary-blue: #4A90D9;
--success-green: #34C759;
--background: #FFFFFF;
--surface: #F5F5F7;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-tertiary: #999999;
--switch-save-gradient: linear-gradient(135deg, #F0EBFF 0%, #E8F4FD 100%);
```

### Typography
```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--heading-large: 600 24px/1.2;
--heading-medium: 700 18px/1.3;
--heading-small: 700 14px/1.4;
--body: 400 14px/1.5;
--caption: 400 12px/1.4;
--label: 700 10px/1 uppercase tracking-wide;
```

### Spacing
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;
```

---

## Assets Needed

### JD Sports Logo
Use the provided logo: Black circle with white "JD" letters.
Can be implemented as:
```jsx
<div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
  <span className="text-white font-bold text-2xl">JD</span>
</div>
```

### Placeholder Images
- Hero images can be gradient placeholders or use Unsplash for sports/streetwear imagery
- Payment provider logos can be simple text badges if needed

### Icons
Use Lucide React icons:
- ArrowLeft (back)
- Heart (favorite)
- X (dismiss)
- MapPin (location)
- Truck (delivery)
- Store (stores)
- CreditCard (payment)
- Info (info tooltip)

---

## Component Structure

```
App
├── Homescreen
│   ├── StatusBar
│   ├── Header
│   ├── HeroCarousel
│   ├── SearchBar
│   ├── QuickAccessPills
│   ├── SwitchAndSaveCard ← NEW
│   ├── SpotlightSection
│   └── BottomNav
│
└── RetailerDetailPage
    ├── HeroSection
    ├── RetailerIdentity
    ├── RewardCard
    ├── WhySwitchSection
    ├── TrustSignals
    ├── PaymentOptions
    ├── PendingPeriod
    ├── StoreFinder
    └── StickyCTA
```

---

## Prototype Behavior

1. **Initial state**: Homescreen with Switch & Save module visible
2. **Tap "DISCOVER JD SPORTS"**: Slide transition to Retailer Detail Page
3. **Tap back arrow**: Slide back to Homescreen
4. **Tap "×" on Switch & Save**: Module fades out/collapses
5. **Tap "START EARNING"**: Can show simple toast/modal "Opening JD Sports..." or just log to console

---

## Quality Checklist

- [ ] Mobile viewport (375px width)
- [ ] Smooth scroll behavior
- [ ] Touch-friendly tap targets (min 44px)
- [ ] Proper visual hierarchy
- [ ] Consistent spacing with Airtime design
- [ ] Switch & Save module is visually distinct but cohesive
- [ ] All text is legible
- [ ] Transitions feel native/smooth
