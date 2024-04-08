import {Icons} from "@/components/ui";

export const Notifications = () => {
	return (
		<div className="flex items-center group/notifications relative">
			<button
				className="transition-all
				dark:hover:text-primary-500
				custom-dark:text-primary-500
				hover:text-primary-500">
				<Icons name="notifications"/>
			</button>
		</div>
	)
}
