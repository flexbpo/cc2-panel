'use client';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export const ChangeTheme = () => {
	const [mounted, setMounted] = useState(false);
	const {theme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true)
	}, []);

	if (!mounted) {
		return null
	}

	const changeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	return (
		<>
			<button onClick={changeTheme}>
			{
				theme === 'light'
					? <svg
						className="fill-black dark:fill-white"
						height="13"
						viewBox="0 0 13 13"
						width="13"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.4379 9.14802C12.6279 8.72302 12.1169 8.36102 11.6899 8.54702C10.6773 8.98732 9.55567 9.11266 8.47088 8.90671C7.38608 8.70077 6.38839 8.17308 5.60762 7.39231C4.82686 6.61155 4.29917 5.61386 4.09323 4.52906C3.88728 3.44427 4.01262 2.3226 4.45292 1.31002C4.63892 0.88302 4.27692 0.37202 3.85292 0.56202C2.89004 0.991476 2.04606 1.64867 1.39374 2.47695C0.741418 3.30523 0.300331 4.27973 0.108507 5.31644C-0.0833159 6.35315 -0.0201198 7.42096 0.292647 8.42781C0.605414 9.43466 1.15837 10.3503 1.90383 11.0959C2.6493 11.8414 3.5649 12.3945 4.57172 12.7074C5.57853 13.0203 6.64633 13.0836 7.68306 12.8919C8.7198 12.7002 9.69435 12.2592 10.5227 11.607C11.3511 10.9548 12.0084 10.1108 12.4379 9.14802Z"/>
					</svg>
					: <svg
						className="fill-black dark:fill-white"
						height="13"
						viewBox="0 -960 960 960"
						width="13"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
					</svg>
			}
			</button>
		</>
	)
}
