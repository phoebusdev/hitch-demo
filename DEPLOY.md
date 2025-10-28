# Deploy Hitch Demo to Vercel

## 🚀 Quick Deploy (2 minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in/up
2. **Import Project**: Click "Add New" → "Project"
3. **Import Git Repository**:
   - If you have a GitHub account, push this code to GitHub first:
     ```bash
     # On GitHub, create a new repository called "hitch-demo"
     # Then run:
     cd /home/henri/vibe79/hitch-demo
     git remote add origin https://github.com/YOUR_USERNAME/hitch-demo.git
     git push -u origin master
     ```
   - Or use Vercel's "Import Git Repository" and paste the GitHub URL
4. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
5. **Deploy**: Click "Deploy"
6. **Done!** Your app will be live at `https://hitch-demo-xxxxx.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd /home/henri/vibe79/hitch-demo

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? hitch-demo
# - Directory? ./
# - Override settings? N

# Production deployment
vercel --prod
```

You'll get a live URL like: `https://hitch-demo.vercel.app`

## 📱 After Deployment

1. **Test on Mobile**: Open the Vercel URL on your phone
2. **Share the Link**: Send to stakeholders, investors, or users
3. **Custom Domain** (optional): Add your own domain in Vercel dashboard

## 🎯 What You'll See Live

- ✅ Responsive mobile-first design
- ✅ Interactive toggle switches
- ✅ Match notifications (appear 5 seconds after toggling)
- ✅ Trip history with earnings
- ✅ Beautiful animations
- ✅ Works on all devices

## 🔄 Updating the Demo

```bash
# Make changes to code
cd /home/henri/vibe79/hitch-demo

# Commit changes
git add .
git commit -m "Update demo"

# Push to GitHub (if using Option 1)
git push

# Or re-deploy with Vercel CLI (if using Option 2)
vercel --prod
```

Vercel will automatically rebuild and deploy!

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2563eb', // Change to your brand color
  secondary: '#1e40af',
}
```

### Update Mock Data
Edit `components/TripHistory.tsx`:
```typescript
const monthlyEarnings = 15000 // Change earnings
const trips = [...] // Modify trip history
```

### Add More Corridors
Edit `components/ToggleScreen.tsx`:
```typescript
setCorridor('Tiranë → Vlorë') // Change detected route
```

## 🐛 Troubleshooting

**Build fails on Vercel?**
- Check that all dependencies are in `package.json`
- Make sure TypeScript has no errors: `npm run build` locally

**Can't access the URL?**
- Wait 1-2 minutes for DNS propagation
- Try incognito mode to avoid cache issues

**Mobile view looks weird?**
- The app is mobile-first and looks best in portrait mode
- Desktop users see a "best viewed on mobile" notice

## 📊 Vercel Analytics (Optional)

Enable Web Analytics in Vercel dashboard to track:
- Page views
- Device types (mobile vs desktop)
- Geographic distribution
- Performance metrics

## 💰 Cost

- **Free** for personal projects
- Unlimited bandwidth and deployments
- Custom domain included

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
