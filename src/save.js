/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();
	return (
		<div className="schema-faq wp-block-yoast-faq-block" { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};
export default Save;
