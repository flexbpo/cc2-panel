import {Icons} from "@/components/ui";
import {DropDownNewEntry} from "@/components/ui/DropDownNewEntry";

export default function Home() {
	return (
		<>
			<div className="flex justify-between">
				<div
					className="flex items-center gap-10 text-blue-950 text-lg lg:text-[22px] dark:text-white custom-dark:text-white">
					<h1 className="flex gap-3 font-medium">
						<Icons name="truck"/>

						Truck
					</h1>

					<h2
						className="relative font-normal
						before:content-[''] before:block before:absolute before:bg-gray-500 before:h-full before:w-1 before:opacity-5 before:-left-5">
						Summary
					</h2>
				</div>

				<DropDownNewEntry/>
			</div>

			<div className="grid grid-cols-5 gap-4 h-full">
				<div className="h-full bg-gray-200 p-4">
					<h3 className="flex justify-between items-center gap-3 text-neutral-400 font-medium">
						<div className="bg-white size-8 rounded-[10px] flex items-center justify-center">
							<Icons name="draft"/>
						</div>

						<span className="flex-1">
							Draft
						</span>

						<div>
							1
						</div>
					</h3>
				</div>
			</div>
		</>
	);
}
