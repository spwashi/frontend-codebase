import React, {useCallback, useState} from 'react';
import MonacoEditor, {EditorProps} from '@monaco-editor/react'
import {useSpwTheme} from './theme';
import {spwParser} from '@spwashi/spw';
import {Log} from '../../Log';

function SpwEditor(props: EditorProps) {
    const {theme, language}           = useSpwTheme();
    const [parsed, setParsed]         = useState<any | null>();
    const [parseError, setParseError] = useState<any | null>();
    const parse                       = useCallback(
        () => {
            try {
                const parsed = spwParser.parse(props.value, {})
                setParsed(parsed);
            } catch (e) {
                setParsed(null)
                setParseError(parseError);
            }
        },
        [props.value],
    );


    return (
        <div style={{maxWidth: 500 + 'px'}}>
            {
                language && (
                    <MonacoEditor
                        height={300}
                        {...props}
                        options={
                            {
                                minimap: {enabled: false},
                                ...props.options ?? {},
                            }
                        }
                        language={language}
                        theme={theme}
                    />
                )
            }
            <Log error={!!parseError}>{parseError ?? parsed}</Log>
        </div>
    );
}

export default SpwEditor;
