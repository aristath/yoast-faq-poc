/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * We only want to allow a single answer and a question as inner-blocks.
 * However, answers and questions should both allow inner-blocks, without restrictions.
 * In order to accomplish this, we can use a `group` block for both the question and the answer.
 *
 * We're only going to allow adding a question and an answer, so we should only allow using group blocks.
 */
const ALLOWED_BLOCKS = [ 'core/group' ];

/**
 * The template defines the structure of the block.
 *
 * Since we're locking the block template, users won't be able to remove these 2 group blocks.
 */
const TEMPLATE = [
	[
		'core/group',
		{ className: 'yoast-faq-question' }, // Define a class for the question group block.
		[
			// Add a paragraph block as the default inner block, with a placeholder.
			[ 'core/paragraph', { placeholder: __( 'Enter a question.' ) } ],
		],
	],
	[
		'core/group',
		{ className: 'yoast-faq-answer' }, // Define a class for the answer group block.
		[
			// Add a paragraph block as the default inner block, with a placeholder.
			[ 'core/paragraph', { placeholder: __( 'Enter the answer to the question.' ) } ],
		],
	],
];

const Edit = () => {
	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// Only allow the group blocks.
		allowedBlocks: ALLOWED_BLOCKS,
		// Use the defined template.
		template: TEMPLATE,
		// Disable the appender so users can't add any more blocks.
		renderAppender: false,
	} );

	return (
		<div className="schema-faq wp-block-yoast-faq-block" { ...innerBlocksProps } />
	);
};
export default Edit;
