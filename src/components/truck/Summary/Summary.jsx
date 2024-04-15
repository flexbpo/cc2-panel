import {SummaryTitle} from "@/components/truck/Summary/Title";
import {State} from "@/components/truck/Summary/State";

export const TruckSummary = ({ children }) => {
	return (
		<SummaryTitle title="Truck" subtitle="Summary" icon="truck">
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[calc(100svh-215px)]">
				<State title="Draft" icon="draft" quantity="1" textColor="text-gray-500" bgColor="bg-gray-200" borderColor="border-gray-400">
					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>
				</State>

				<State title="Sent" icon="sent" quantity="1" textColor="text-sky-600" bgColor="bg-sky-100" borderColor="border-sky-300">
					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>
				</State>

				<State title="Accepted" icon="check" quantity="3" textColor="text-green-600" bgColor="bg-green-100" borderColor="border-green-300">
					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>

					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>

					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>
				</State>

				<State title="Rejected" icon="close" quantity="1" textColor="text-rose-600" bgColor="bg-rose-100" borderColor="border-rose-300">
					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>

					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>

					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>

					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>
				</State>

				<State title="Cancelled" icon="cancelled" quantity="1" textColor="text-orange-600" bgColor="bg-orange-100" borderColor="border-orange-300">
					<div
						className="bg-white rounded-[10px] shadow p-2.5 text-[11px] dark:bg-secondary-700 custom-dark:bg-secondary-700">
						<h4 className="truncate text-sm py-2 px-2.5 bg-slate-50 dark:bg-slate-50/10 rounded-[5px]">
							S4G-0358833-5
						</h4>

						<div className="p-2.5 relative
								before:h-[calc(100%-20px)] before:w-[1px] before:content-[''] before:block before:absolute before:top-2.5 before:left-[55px] before:bg-slate-300">
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
							<div className="flex ">
								<p className="max-w-[60px] w-full text-slate-600 dark:text-gray-400 custom-dark:text-gray-400 font-medium">MBOL</p>
								<p className="flex-1 text-slate-500 dark:text-gray-400 custom-dark:text-gray-400 truncate">66627090001</p>
							</div>
						</div>
					</div>
				</State>
			</div>
		</SummaryTitle>
	)
}
