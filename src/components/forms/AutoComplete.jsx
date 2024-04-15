import {BaseAutoComplete} from "@/components/forms/BaseAutoComplete";
import {Icons} from "@/components/ui";

export const AutoComplete = ({
		control,
		children,
		className,
		errorsVisible = true,
		getItems,
		label,
		name,
		placeholder,
		selectedValue,
	}) => {

	return (
		<BaseAutoComplete
			className={className}
			control={control}
			errorsVisible={errorsVisible}
			getItems={getItems}
			label={label}
			name={name}
			placeholder={placeholder}
			selectedValue={selectedValue}>
			{(index, items, listRef, selectedItemIndex, autocomplete, selectedValue, field) => (
				<div
					key={`section-${index}`}
					className="absolute top-[60px] left-0 bg-white dark:bg-secondary-700 custom-dark:bg-secondary-700 rounded shadow w-full z-10">

					{items.length > 0 ? <>
						<p className="text-[11px] text-neutral-400 pt-4 px-5 pb-2">
							Find by name or number
						</p>

						<hr className="w-[calc(100%-12px)] ml-1.5"/>
						<ul
							ref={listRef}
							className="overflow-auto w-full max-h-[200px]" {...autocomplete.getListProps()}>
							{items.map((item, index) => (
								<li
									key={index}
									className={`group/item py-2 px-4 transition-all text-xs flex justify-between items-center ${
										selectedItemIndex === index
											? "bg-primary-500 dark:bg-primary-500 !text-white"
											: "hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white"
									}`}>
									<div className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700 dark:text-white custom-dark:text-white'} hover:cursor-pointer`} onClick={(event) => {
										event.stopPropagation();
										autocomplete.setQuery(item.query)
										autocomplete.refresh();
										const selectedValueResult = selectedValue(item);
										field.onChange(selectedValueResult);
									}}>
										{children(item, selectedItemIndex, index)}
									</div>

									<button
										className={`${selectedItemIndex === index ? 'text-white' : ''} text-primary-500 group-hover/item:text-white`}
										type="button" onClick={() => console.log('aquí va una acción')}>
										Edit
									</button>
								</li>
							))}
						</ul>

						<button
							className="flex gap-2 items-center transition-all text-[11px] px-5 mt-2 mb-7 text-primary-500 hover:-translate-y-1"
							type="button">
							Add New

							<span className="text-[8px] rounded-full border border-primary-500 flex justify-center items-center size-3">
								<Icons name="plus"/>
							</span>
						</button>
					</> : null}
				</div>
			)}
		</BaseAutoComplete>
	)
}
