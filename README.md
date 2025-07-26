# Adaptix 🏋️‍♂️

**AI-Powered Workout Plans Tailored Just for You**

Adaptix is a modern web application that generates personalized workout plans based on your fitness goals, experience level, available equipment, and preferences. Built with React, TypeScript, and Tailwind CSS, it provides an intuitive interface for creating custom fitness routines.

![Adaptix Preview](https://via.placeholder.com/800x400/030213/ffffff?text=Adaptix+-+AI+Workout+Plans)

## ✨ Features

- **🎯 Goal-Focused Planning**: Whether you want to lose weight, build muscle, or improve endurance
- **⚡ Instant Generation**: Get your personalized workout plan in seconds
- **🏃‍♀️ For Everyone**: Adapts to all experience levels from beginner to advanced
- **🏠 Equipment Flexible**: Works with any equipment setup - from bodyweight to full gym access
- **📱 Responsive Design**: Beautiful interface that works on desktop and mobile
- **🎨 Modern UI**: Clean, professional design with smooth animations

## 🚀 Demo

Experience Adaptix live: [Demo Link](#) *(Replace with your actual demo URL)*

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite (recommended)
- **Deployment**: Vercel/Netlify compatible

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/adaptix.git
   cd adaptix
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or your dev server URL)

## 🏗️ Project Structure

```
adaptix/
├── components/
│   ├── HeroSection.tsx      # Landing page hero section
│   ├── WorkoutForm.tsx      # Fitness requirements form
│   ├── WorkoutPlan.tsx      # Generated workout plan display
│   ├── mockData.ts          # Sample workout data
│   └── ui/                  # shadcn/ui components
├── styles/
│   └── globals.css          # Global styles and design tokens
├── App.tsx                  # Main application component
└── README.md
```

## 🎨 Design System

Adaptix uses a carefully crafted design system with:

- **Typography**: Responsive text scales with proper hierarchy
- **Colors**: Dark/light mode ready color tokens
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components from shadcn/ui
- **Animations**: Smooth transitions and hover effects

### Color Palette

```css
/* Light Mode */
--primary: #030213        /* Primary brand color */
--secondary: #f3f3f5      /* Secondary backgrounds */
--muted: #ececf0          /* Muted backgrounds */
--accent: #e9ebef         /* Accent color */
--destructive: #d4183d    /* Error/warning states */
```

## 📋 Usage

1. **Landing Page**: Users are greeted with an overview of Adaptix's features
2. **Requirements Form**: Collect user preferences including:
   - Fitness goals (weight loss, muscle gain, strength, etc.)
   - Experience level (beginner, intermediate, advanced)
   - Workout duration and frequency
   - Available equipment
   - Specific muscle groups to target
   - Injuries or limitations
3. **Workout Plan**: Display a comprehensive, personalized workout plan with:
   - Exercise details (sets, reps, rest times)
   - Training tips
   - Weekly schedule

## 🔧 Configuration

### Environment Variables

Currently, Adaptix runs entirely on the frontend with mock data. For production use with real AI generation, you might want to add:

```env
VITE_API_URL=your-api-endpoint
VITE_API_KEY=your-api-key
```

### Customization

You can customize the design by modifying the CSS variables in `styles/globals.css`:

```css
:root {
  --primary: your-brand-color;
  --font-size: 14px;
  /* Add your custom tokens */
}
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run with coverage
npm run test:coverage
```

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📈 Roadmap

- [ ] **AI Integration**: Connect to real AI service for workout generation
- [ ] **User Accounts**: Save and track workout plans
- [ ] **Progress Tracking**: Monitor fitness progress over time
- [ ] **Exercise Database**: Expanded exercise library with videos
- [ ] **Mobile App**: React Native mobile application
- [ ] **Social Features**: Share workouts and progress with friends
- [ ] **Nutrition Planning**: Complement workouts with meal plans

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the icon set
- **Vercel** for hosting and deployment platform

---


*Always consult with healthcare professionals before starting any new exercise program.*
