import React from 'react';
import './news-style.css';
import type { ILinkDefault } from '../../../shared';
import type { INews } from './interafaces';
import { configWhatsNewBlock } from '../config';

import {
	getCorrectTimeForDateMs,
	config
} from '../../../shared';

const News: React.FC<INews> = ({ timeCreatedInMs, image, title, icon, lists, index }) => {
	const d = configWhatsNewBlock.labels[index];

	const labelData = index <= 2 && d ? d : null;

	function getCorrectTextForElementListWithLinks(strValue: string, links: ILinkDefault[]) {
		const arrayJsxElements = [];

		const regExp = /([\s\S]*?)link{([\s\S]+?)}link([\s\S]*?)/gm;

		let result;

		let lastIndexForCheck;

		function isNotEmptyGroup(valueStrGroup: any): boolean {
			return (typeof valueStrGroup === 'string' && valueStrGroup !== '');
		};

		let startIndex = 0;

		while ((result = regExp.exec(strValue)) !== null) {
			const $1 = result[1];
			const $2 = result[2];
			const $3 = result[3];

			if (isNotEmptyGroup($1)) {
				arrayJsxElements.push(<span>{$1}</span>);
			}

			if (isNotEmptyGroup($2)) {
				const configPathLink = links[startIndex] || { path: '#', titleHover: 'Это нерабочая ссылка, можете не нажимать. Мы разбираемся уже с этим.', targetValue: '_self' };

				arrayJsxElements.push(<a href={configPathLink.path} target={configPathLink.targetValue} title={configPathLink.titleHover} rel='noreferrer' className='container-lists__link-element'>{$2}</a>);
			}

			if (isNotEmptyGroup($3)) {
				arrayJsxElements.push(<span>{$3}</span>);
			}

			lastIndexForCheck = regExp.lastIndex;

			startIndex = startIndex + 1;
		}

		if (typeof lastIndexForCheck === 'number' && lastIndexForCheck < strValue.length) {
			arrayJsxElements.push(<span>{strValue.slice(lastIndexForCheck)}</span>);
		}

		return arrayJsxElements;
	};

	return (
		<div className='news'>
			<div className='news__container'>
				<div className='news__column'>
					<div className='news__image-container'>
						<img className='news__image' src={`${config.endPointForStatics}assets/images/whats-new-images/${image.name}`} alt={image.alt} />
					</div>
				</div>
				<div className='news__column'>
					<div className='news__content content-news'>
						<div className='content-news__head'>
							{labelData &&
								<div className='content-news__label label-news-content' style={{ backgroundColor: labelData?.color }}>
									<img className='label-news-content__icon' src={`${config.endPointForStatics}assets/icons/${labelData?.icon?.name}`} alt={labelData?.icon?.alt} />
									<span>{labelData?.text}</span>
								</div>
							}
							<div className='content-news__date'>{getCorrectTimeForDateMs(timeCreatedInMs)}</div>
						</div>
						<div className='content-news__title-block'>
							<h2 className='content-news__title'>{title}</h2>
							<img className='content-news__icon' src={`${config.endPointForStatics}assets/icons/whats-new-icons/${icon.name}`} alt={icon.alt} />
						</div>
						<div className='content-news__lists-container container-lists'>
							{lists.map((listData, i: number) => {
								return (
									<div key={i} className='container-lists__list-block'>
										<h3 className='container-lists__title'>{listData.title}</h3>
										<ul className='container-lists__list'>
											{listData.elements.map((element, index: number) => {
												return (
													<li key={index} className='container-lists__element'>
														{element.links && Array.isArray(element.links) && element.links.length ?
															(<React.Fragment>
																{getCorrectTextForElementListWithLinks(element.text, element.links).map((element, v: number) => {
																	return (
																		<React.Fragment key={v}>
																			{element}
																		</React.Fragment>
																	);
																})}
															</React.Fragment>) :
															element.text
														}
													</li>
												);
											})}
										</ul>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { News };
