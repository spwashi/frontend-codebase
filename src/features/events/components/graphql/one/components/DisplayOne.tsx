import {EventTag} from './join/tag';
import React, {useState} from 'react';
import {IEvent_Complete, IEventTag_Complete} from '../../../../../../app/models/event/hybrids';
import {useActiveEvent} from '../context/context';
import {convertFromRaw, Editor, EditorState} from 'draft-js';
import '../styles/event.scss';
import {IEvent} from '../../../../../../app/models/event/models';
import {ErrorBoundary} from '../../../../../../components/error';
import {DeleteEventButton} from './DeleteButton';

function RichText({src}: { src: string }) {
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(src))));
    return <Editor readOnly onChange={setEditorState} editorState={editorState}/>
}

interface EventDisplayParams {event: IEvent | IEvent_Complete;}


function Internal({event}: EventDisplayParams) {
    const {title, start, end, eventTags: eventTags} = event as IEvent_Complete;

    return <div className="event-wrapper">
        <article className="event">
            <section>
                <header><span className="title">{title}</span></header>
                <section className="body">
                    <div className="start">{start}</div>
                    <div className="end">{end}</div>
                    d <div style={{border: 'thick solid black', display: 'inline-flex'}}>
                    {eventTags && eventTags.map(({tag}: IEventTag_Complete) => <EventTag
                        tag={tag}
                        event={event}
                    />)}
                </div>
                </section>
            </section>
        </article>
    </div>;
}
export function EventDisplay({event}: EventDisplayParams) {
    const {id} = event as IEvent_Complete;

    return (
        <>
            <DeleteEventButton id={id}/>
            <ErrorBoundary>
                <Internal event={event}/>
            </ErrorBoundary>
        </>
    )
}

/**
 * Displays events based on the context
 * @constructor
 */
export function EventContextDisplay() {
    const event = useActiveEvent();
    if (!event) return null;
    return <EventDisplay event={event}/>
}