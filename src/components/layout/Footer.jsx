import React from 'react';
import { Building2, Phone, MessageSquare, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

/**
 * Multi-column footer with brand overview, branch shortcuts, and legal links
 */
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">AndalKost</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              AndalKost is a modern boarding house brand providing comfortable, fully-furnished, high-speed Wi-Fi equipped living spaces in strategic university and corporate zones.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Hotline / WA: {CONTACT_INFO.formattedPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-500" />
                <span>Email: {CONTACT_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Branches</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#locations" className="hover:text-orange-400 transition-colors">UI Depok Hub</a></li>
              <li><a href="#locations" className="hover:text-orange-400 transition-colors">Business Hub Kuningan</a></li>
              <li><a href="#locations" className="hover:text-orange-400 transition-colors">Ganesha Tech Hub ITB</a></li>
              <li><a href="#locations" className="hover:text-orange-400 transition-colors">BSD Tech City Hub</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#rooms" className="hover:text-orange-400 transition-colors">Standard Studio</a></li>
              <li><a href="#rooms" className="hover:text-orange-400 transition-colors">Deluxe Executive</a></li>
              <li><a href="#rooms" className="hover:text-orange-400 transition-colors">VIP Loft Suite</a></li>
              <li><a href="#amenities" className="hover:text-orange-400 transition-colors">Facilities & Amenities</a></li>
            </ul>
          </div>

          {/* Col 4: Social & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram @andalkost.id</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">TikTok @lifeatandalkost</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AndalKost Business Network. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span>for comfortable living</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
