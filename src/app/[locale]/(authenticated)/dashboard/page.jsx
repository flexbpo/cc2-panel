import {Icons} from "@/components/ui";
import {DropDownNewEntry} from "@/components/ui/DropDownNewEntry";

export default function Home() {
	return (
		<>
			<div className="flex justify-between">
				<div className="flex items-center gap-10 text-blue-950 text-lg lg:text-[22px] dark:text-white custom-dark:text-white">
					<h1 className="flex gap-3 font-medium">
						<Icons name="air"/>

						ABI
					</h1>

					<h2
						className="relative font-normal
						before:content-[''] before:block before:absolute before:bg-gray-500 before:h-full before:w-1 before:opacity-5 before:-left-5">Summary</h2>
				</div>

				<DropDownNewEntry/>
			</div>
		</>
	);
}
