# Switch & Save: Product Requirements Document

## Executive Summary

**Feature Name:** Switch & Save  
**Status:** Prototype  
**Author:** Julian (Product Director)  
**Date:** November 2025

### The Problem

Traditional cashback operates at the end of the purchasing journey. A consumer has already decided to buy from Foot Locker, then discovers they can earn cashback through Airtime. This is not incremental spend for retailers—they're simply giving away margin on a transaction that would have happened anyway.

### The Opportunity

Using Open Banking data, we can identify where members currently shop and proactively introduce them to competing retailers *before* they start their shopping journey. This is genuinely incremental for the retailer (acquiring a customer from a competitor) and worth premium rates.

**Business Model**: Switch & Save is a **paid placement** product. Retailers pay a premium for this prominent homescreen position because we're delivering genuinely incremental customers (switched from competitors), not just rewarding existing behavior.

### The Hypothesis

If we surface a rich, persuasive retailer showcase to members before they begin shopping (based on Open Banking signals showing competitor spend), we can redirect spend to retailers who pay premium rates for genuinely incremental customers.

---

## Feature Overview

### What We're Building

1. **Switch & Save Homescreen Module** — A prominent card appearing directly after the hero component that identifies a specific switching opportunity based on the member's spending patterns

2. **Rich Retailer Detail Page** — A new, content-rich merchant page designed to *sell* the retailer to the member, not just present an offer

### What We're NOT Building (for this prototype)

- Push notification triggers
- Multiple Switch & Save opportunities (we'll show one at a time)
- Dynamic content sourcing from retailers
- A/B testing infrastructure

---

## User Journey

### Trigger Conditions

The member has:
- Connected Open Banking
- Linked a CLO-eligible card
- Transaction history showing spend at a "source" retailer (e.g., Foot Locker)
- Available offer from a competing "target" retailer (e.g., JD Sports)

### Flow

```
Homescreen
    └── Hero component (existing)
    └── Switch & Save module (NEW)
            └── Tap → Rich Retailer Detail Page (NEW)
                    └── "Start Earning" CTA
                            └── Opens retailer website (CLO tracked)
```

---

## Screen 1: Switch & Save Homescreen Module

### Placement
Immediately after the hero component, before other modules like "Spotlight" or "New Retailers"

**Strategic Importance**: This is prime real estate on the homescreen. Retailers pay premium rates for this placement because it delivers genuinely incremental customers.

### Visual Design

- Premium white card with shadow (elevated above other content)
- Hero image showcasing retailer's brand/products
- Clear "SWITCH & SAVE" badge
- Explicit Open Banking messaging
- Rich, magazine-style content layout

### Content Structure

```
[Hero Image - Lifestyle/product photo]
[SWITCH & SAVE badge]

[Retailer logo]  RETAILER NAME      [3% badge]
                 Tagline

You spent £X at [Competitor] — earn rewards here instead

[Trust signals: Trustpilot ⭐⭐⭐⭐]  [Payment options: Klarna, etc]

[Social proof: 40% of members shop here]

[Nearby stores: 3 stores within 20 miles]

⚡ CURRENT DEALS
• Specific deal 1
• Specific deal 2
• Specific deal 3

[PRIMARY CTA: Start Earning]
[SECONDARY CTA: View Details]

Based on your connected bank account ⓘ
```

### Content Hierarchy (Priority Order)

1. **Hero image + Logo** - Visual brand recognition
2. **Spend reference** - Personal relevance ("You spent £127...")
3. **Trust & payment** - Reduce friction early (Trustpilot + payment methods)
4. **Social proof** - "40% of members..." builds confidence
5. **Location awareness** - "3 stores within 20 miles" adds immediacy
6. **Current deals** - Specific value propositions
7. **CTAs** - Clear next steps

### Content Philosophy

**Don't hide value behind a click**. Since this is a paid placement, we need to:

1. **Show, don't tell**: Include actual deals, not generic "great offers"
2. **Remove friction**: User should be able to decide without clicking through
3. **Build trust**: Display ratings, payment options, social proof
4. **Create urgency**: Show current/limited-time deals
5. **Provide escape hatches**: Both primary action AND "learn more" option

### Copy Principles

- **Explicit about data source**: Direct about Open Banking
- **Specific spend reference**: Actual £ amount at competitor
- **Concrete value props**: Real deals, not vague promises
- **Trust indicators**: Ratings, member stats, payment options
- **Dual CTAs**: Immediate action + learn more

### Dismissal
- Small "×" dismiss option (top right)
- Once dismissed, this specific opportunity doesn't resurface for 30 days
- **Note**: Low dismissal rate expected due to high relevance and value

---

## Screen 2: Rich Retailer Detail Page

### Purpose

This is NOT the standard Airtime merchant page. This is a *sell sheet* designed to convince a Foot Locker shopper that JD Sports is worth trying.

### Header Section

```
[Full-width hero image - JD Sports lifestyle/product imagery]

[JD Sports logo]                    [♡ Favorite]

JD SPORTS

"The UK's leading sports fashion retailer"

[3% REWARD]  [IN-STORE]  [ONLINE]
```

### Why Switch Section

```
WHY SWITCH FROM FOOT LOCKER?

• Free delivery on orders over £80
• Up to 50% off Nike right now
• 50% off jackets and coats
• 500+ stores across the UK
• Klarna, Clearpay & PayPal available
```

### Trust Signals Section

```
TRUSTED BY AIRTIME MEMBERS

[Trustpilot stars] 4.2/5 on Trustpilot

"40% of Airtime members have shopped at JD Sports"

[App Store badge] [Google Play badge]
```

### Your Reward Section

```
YOUR REWARD

┌─────────────────────────────────────┐
│  3%        Base Reward              │
│            In-Store & Online        │
│                                     │
│  ✓ Card linked and ready to earn   │
└─────────────────────────────────────┘

PENDING PERIOD: 45 days
```

### Payment Options Section

```
PAYMENT OPTIONS

[Klarna logo] [Clearpay logo] [PayPal logo] [Apple Pay logo]
```

### Store Finder Section

```
STORES NEAR YOU

[Map preview or location prompt]

"Find your nearest JD Sports"

[FIND STORES button]
```

### Primary CTA

```
[START EARNING AT JD SPORTS] — Primary orange button, sticky at bottom
```

---

## Design System Reference

Based on the existing Airtime app:

### Colors
- **Primary Orange**: #FF6B35 (CTAs, badges)
- **Secondary Blue**: #4A90D9 (info cards, secondary actions)
- **Background**: #FFFFFF
- **Text Primary**: #1A1A1A
- **Text Secondary**: #666666
- **Success Green**: #34C759 (checkmarks, confirmations)

### Typography
- **Headers**: Bold, uppercase, tracking wide
- **Body**: Regular weight, clean sans-serif
- **Labels/Badges**: Uppercase, small, bold

### Components
- **Reward badges**: Rounded rectangles with percentage prominently displayed
- **Cards**: Rounded corners (12-16px), subtle shadows
- **Buttons**: Full-width, rounded, bold text
- **Tags/Pills**: Small rounded indicators (e.g., "In-Store", "Online", "FLASH")

### Iconography
- Simple, outlined icons
- Consistent stroke weight
- Used sparingly for trust signals and features

---

## Success Metrics (for future measurement)

### Primary
- **Switch Rate**: % of members shown Switch & Save who transact at target retailer within 30 days
- **Incremental Revenue**: Revenue from Switch & Save transactions vs. standard affiliate

### Secondary
- **Module Engagement**: Tap-through rate on homescreen module
- **Dismissal Rate**: % who dismiss without engaging
- **Time to Conversion**: Days between viewing and first transaction

---

## Business Model & Pricing

### Value Proposition to Retailers

Switch & Save delivers **genuinely incremental customers**:
- We're not rewarding existing behavior (traditional cashback)
- We're actively switching spend from competitors
- Targeting is based on proven spend at competitors
- Premium placement on high-traffic homescreen

### Pricing Model (Proposed)

- **Base rate**: 2-3x standard affiliate commission
- **Rationale**: We're delivering incremental acquisition, not passive discovery
- **Additional**: Potential flat fee for premium placement guarantee
- **Performance-based**: Higher rates for actual conversions from competitor switchers

### Content Requirements

Since this is a paid placement with premium positioning:

1. **Retailers must provide**:
   - High-quality hero imagery
   - Current deals/promotions (updated monthly)
   - Brand tagline
   - Key selling points (delivery, payment, store count)
   - Store locations (for proximity targeting)

2. **Airtime provides**:
   - Trust signals (Trustpilot, member stats)
   - Spend intelligence (Open Banking data)
   - **Location-based store proximity** ("3 stores within 20 miles")
   - Conversion optimization
   - A/B testing

### Location-Aware Features

**Nearby Stores Component**:
- Uses device location (with permission) to show store proximity
- Displayed in green badge for high visibility
- Format: "X stores within Y miles of you"
- **Value**: Drives in-store visits + builds urgency (convenience factor)
- Can drive to store locator on detail page or direct to maps

## Open Questions (Post-Prototype)

1. **Content sourcing**: How do we get rich content from retailers at scale? → Self-service portal vs. managed service
2. **Switching logic**: How do we prioritize which switches to show when multiple opportunities exist? → Highest incremental value (commission × probability of switch)
3. **Retailer pricing**: What's the premium we charge for incremental customer acquisition? → See pricing model above
4. **Privacy messaging**: Do we need additional consent flows for this explicit use of Open Banking data? → Current disclosure likely sufficient, but legal review needed
5. **Frequency**: How often should we surface Switch & Save opportunities? → Max 1 per week to maintain premium feel
6. **Dismissal impact**: If user dismisses, do we show different retailer or wait 30 days? → Wait 30 days for same switch, but can show different category
7. **Performance measurement**: How do we prove incrementality to retailers? → Control group who don't see Switch & Save

---

## Appendix: JD Sports Prototype Content

For the hard-coded prototype, use:

- **Retailer**: JD Sports
- **Logo**: Black circle with white "JD" text
- **Reward**: 3%
- **Source retailer**: Foot Locker
- **Source spend**: £127 last month
- **Key selling points**:
  - Free delivery over £80
  - Up to 50% off Nike
  - 50% off jackets and coats
  - 500+ UK stores
  - Klarna, Clearpay, PayPal available
- **Trust signal**: 40% of Airtime members have shopped at JD Sports
- **Pending period**: 45 days
