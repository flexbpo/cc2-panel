'use client'

import {useEffect, useState} from "react";
import {Icons} from "@/components/ui";
import {toast} from "sonner";

export const InputTags = ({label, onTagsChange, maxTags, tagsDefault = []}) => {
	const [tags, setTags] = useState(tagsDefault);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleInputKeyPress = (event) => {
		if ((event.key === 'Enter' || event.key === ' ') && inputValue.trim() !== '') {
			event.preventDefault();

			if (!tags.includes(inputValue.trim())) {
				setTags([...tags, inputValue.trim()]);
				onTagsChange([...tags, inputValue.trim()]);
			} else {
				toast.error('The seal already exists')
			}

			setInputValue('');
		}
	};

	const handleTagRemove = (tagToRemove) => {
		setTags(tags.filter(tag => tag !== tagToRemove));
		onTagsChange(tags.filter(tag => tag !== tagToRemove));
	};

	useEffect(() => {
		setTags(tagsDefault)
	}, [tagsDefault]);

	return (
		<>
			{label ? <label>{label}</label> : null}
			<div className="flex flex-wrap border border-opacity-40 border-slate-600 dark:text-black custom-dark:text-black rounded">
				<div className={`flex flex-wrap gap-2 ${tags.length > 0 ? 'p-2' : ''}`}>
					{tags.map(tag => (
						<span key={tag} className="relative bg-primary-500 dark:bg-secondary-750 custom-dark:bg-secondary-750 text-white px-3 py-1 pr-5 text-[11px] block rounded">
							{tag}
							<button
								onClick={() => handleTagRemove(tag)}
								className="absolute top-0 right-0">
								<Icons name="close"/>
							</button>
						</span>
					))}
				</div>

				{tags.length < maxTags
					? <input
						className="border-none flex-1"
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						onKeyDown={handleInputKeyPress}
					/> : null}
			</div>
		</>
	);
};
