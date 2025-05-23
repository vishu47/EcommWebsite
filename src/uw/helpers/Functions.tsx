export const GetStreamRes = (rawText: string) => {
    const lines = rawText.split('\n');
    const result = [];

    for (const line of lines) {
        if (line.startsWith('data: ') && line.trim() !== 'data: [DONE]') {
            const jsonPart = line.slice(6); // remove 'data: '
            try {
                const obj = JSON.parse(jsonPart);
                result.push(obj);
            } catch (error) {
                console.warn('Invalid JSON:', jsonPart);
            }
        }
    }

    return result;
}


export function parseDataBlocks(dataString: any) {
    return dataString
        .split('\n')
        .filter((line: any) => line.startsWith('data: '))
        .map((line: any) => {
            const content = line.replace('data: ', '');
            try {
                const parsed = JSON.parse(content);
                // Check if parsed is a stringified JSON (like raw JSON string)
                if (typeof parsed === 'string' && parsed.trim().startsWith('{')) {
                    return JSON.parse(parsed); // parse again
                }
                return parsed;
            } catch (err) {
                return { raw: content }; // fallback for non-JSON like [DONE]
            }
        })
        .filter((obj: any) => obj !== null && typeof obj === 'object');
}