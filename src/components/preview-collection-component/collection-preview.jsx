import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.scss";

const CollectionPrewview = ({title, items}) => (
	<dvi className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>

		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map(({id, ...otheritemProps}) => (
					<CollectionItem key={id} {...otheritemProps} />
				))}
		</div>
	</dvi>
);

export default CollectionPrewview;
