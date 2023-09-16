import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import s from "./Layout.module.css";

const Layout = () => {
	return (
		<>
			<header className={s.header}>
				<nav>
					<ul className={s.nav}>
						<li>
							<NavLink
								className={s.navlink}
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={s.navlink}
								to="/catalog"
							>
								Catalog
							</NavLink>
						</li>
						<li>
							<NavLink
								className={s.navlink}
								to="/favorites"
							>
								Favorites
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Suspense fallback={<div>Loading...</div>}>
				<main>
					<Outlet />
				</main>
			</Suspense>
		</>
	);
};

export default Layout;
