import type {ReactNode} from 'react';
import Header from './header';
import Footer from './footer';
export default function PageShell({children}:{children:ReactNode}){return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" className="inner-page">{children}</main><Footer/></>}
