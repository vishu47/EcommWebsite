import React from 'react';

type Props = {
    original?: any,
    updated?: any
}

const DiffHighlighter = ({ original, updated }: Props) => {
    const getDiffHtml = (originalStr: any, updatedStr: any) => {
        const originalLines = originalStr.trim().split('\n');
        const updatedLines = updatedStr.trim().split('\n');
        const maxLines = Math.max(originalLines.length, updatedLines.length);

        const result = [];

        for (let i = 0; i < maxLines; i++) {
            const line1 = originalLines[i] || '';
            const line2 = updatedLines[i] || '';

            if (line1 === line2) {
                result.push(<div key={i}>{line1}</div>);
                continue;
            }

            const words1 = line1.split(' ');
            const words2 = line2.split(' ');
            const maxWords = Math.max(words1.length, words2.length);
            const diffWords = [];

            for (let j = 0; j < maxWords; j++) {
                const w1 = words1[j] || '';
                const w2 = words2[j] || '';

                if (w1 === w2) {
                    diffWords.push(<span key={j}>{w1} </span>);
                } else if (w1 && w2) {
                    diffWords.push(
                        <span key={`${j}-rm`} className='text-rose-500 bg-rose-100 px-1 line-through mr-1'>{w1}</span>,
                        // <span key={`${j}-pipe`} className='text-white px-[3px]'>|</span>,
                        <span key={`${j}-add`} className='text-green bg-emerald-100'>{w2} </span>
                    );
                } else if (w1) {
                    diffWords.push(<span key={`${j}-rm`} className='text-rose-500 bg-rose-100'>{w1} </span>);
                } else if (w2) {
                    diffWords.push(<span key={`${j}-add`} className='text-green bg-emerald-100'>{w2} </span>);
                }
            }

            result.push(<div key={i}>{diffWords}</div>);
        }

        return result;
    };

    return (
        <div className='text-[16px]'>
            {original && updated ? getDiffHtml(original, updated) : ""}
        </div>
    );
};


export default DiffHighlighter;
