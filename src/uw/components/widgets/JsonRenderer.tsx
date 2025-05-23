import React from 'react';

type Props = {
    jsonString: any
}
const JsonRenderer = ({ jsonString }: Props) => {
    let parsed: any;

    try {
        parsed = JSON.parse(jsonString);
    } catch {
        return <p>Invalid JSON</p>;
    }

    const entries = Object.entries(parsed);
    const lastIndex = entries.length - 1;

    return (
        <pre className='whitespace-pre text-[14px] '>
            <span style={{ color: 'gray' }}>{'{\n'}</span>
            {entries.map(([key, value], i) => (
                <div key={i} style={{ paddingLeft: '2ch' }}>
                    <span className='text-amber-600'>"{key}"</span>
                    <span className='text-white'>: </span>
                    <span className='text-lvalue text-wrap'>
                        {typeof value === 'string' ? `"${value}"` : String(value)}
                    </span>
                    {i !== lastIndex ? ',' : ''}
                    {'\n'}
                </div>
            ))}
            <span style={{ color: 'gray' }}>{'}'}</span>
        </pre>
    );
}

export default JsonRenderer;
