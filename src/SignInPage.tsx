import { useState, type FormEvent, type ChangeEvent, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, ArrowRight, Mail, Lock, AlertCircle } from 'lucide-react';
import { supabase } from './lib/supabase';

interface Props {
  onSignUp: () => void;
  onSuccess: () => void;
}

export default function SignInPage({ onSignUp, onSuccess }: Props) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.password) e.password = 'Password is required';
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setServerError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);
    if (error) { setServerError(error.message); return; }
    onSuccess();
  };

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <header className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-zinc-900">
        <button onClick={onSuccess} className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-emerald-500 rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.3)]">
            <div className="w-3.5 h-3.5 bg-zinc-950 rotate-45" />
          </div>
          <span className="text-base font-bold tracking-tighter uppercase group-hover:text-emerald-400 transition-colors">
            PromptAid AI
          </span>
        </button>
        <button
          onClick={onSignUp}
          className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors flex items-center gap-2"
        >
          Sign Up <ArrowRight size={12} />
        </button>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Welcome Back</span>
            </div>
            <h1 className="text-3xl font-light tracking-tight text-white">Sign in to your account</h1>
            <p className="text-xs text-zinc-500 font-mono">
              Continue engineering prompts and sharing your work.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <Field label="Email Address" error={errors.email} icon={<Mail size={13} />}>
              <input
                type="email"
                autoComplete="email"
                placeholder="alex@studio.io"
                value={form.email}
                onChange={set('email')}
                className={inputCls(!!errors.email)}
              />
            </Field>

            <Field
              label="Password"
              error={errors.password}
              icon={<Lock size={13} />}
              suffix={
                <button type="button" tabIndex={-1} onClick={() => setShowPw(v => !v)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors pr-4">
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              }
            >
              <input
                type={showPw ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Your password"
                value={form.password}
                onChange={set('password')}
                className={inputCls(!!errors.password)}
              />
            </Field>

            <div className="flex justify-end">
              <button type="button" className="text-[10px] font-mono text-emerald-600 hover:text-emerald-400 transition-colors">
                Forgot password?
              </button>
            </div>

            <AnimatePresence>
              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2 px-3 py-2.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-mono"
                >
                  <AlertCircle size={11} className="shrink-0" />
                  {serverError}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-black text-[11px] uppercase tracking-[0.25em] transition-all mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-zinc-600 border-t-emerald-400 rounded-full animate-spin" />
                  Signing In...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign In <ArrowRight size={14} />
                </span>
              )}
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-zinc-800" />
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">or</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <button
              type="button"
              className="w-full h-11 flex items-center justify-center gap-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-[10px] text-zinc-600 font-mono pt-1">
              Don't have an account?{' '}
              <button type="button" onClick={onSignUp} className="text-emerald-500 hover:text-emerald-400 font-bold transition-colors">
                Sign up
              </button>
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full bg-transparent text-xs text-zinc-300 font-mono placeholder-zinc-700 focus:outline-none py-3 pl-10 pr-4 ${hasError ? '' : ''}`;
}

function Field({ label, error, icon, suffix, children }: {
  label: string;
  error?: string;
  icon: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">{label}</label>
      <div className={`relative flex items-center border ${error ? 'border-rose-500/60 bg-rose-500/5' : 'border-zinc-800 bg-zinc-900 focus-within:border-emerald-500/50'} transition-colors`}>
        <div className="absolute left-3 text-zinc-600">{icon}</div>
        {children}
        {suffix && <div className="absolute right-0 flex items-center">{suffix}</div>}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1 text-[9px] text-rose-400 font-mono"
          >
            <AlertCircle size={9} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
