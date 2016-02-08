/**
 * Default export file for the folder component.
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
import GrotHello0 from './GrotHello';
import GrotTable0 from './GrotTable';
import GrotPanel0 from './GrotPanel';
import GrotObjectBox0 from './GrotObjectBox';
import GrotJSONBox0 from './GrotJSONBox';
import GrotCredits0 from './GrotCredits';
import GrotGOSimpleBox0 from './GrotGOPreviewBox';

export default {
    GrotHello: GrotHello0,
    GrotTable: GrotTable0,
    GrotPanel: GrotPanel0,
    GrotObjectBox: GrotObjectBox0,
    GrotCredits: GrotCredits0,
    GrotGOSimpleBox: GrotGOSimpleBox0,
    GrotJSONBox: GrotJSONBox
};

export function GrotHello(){ return GrotHello0(); }
export function GrotTable(){ return GrotTable0(); }
export function GrotPanel(){ return GrotPanel0(); }
export function GrotObjectBox(){ return GrotObjectBox0(); }
export function GrotCredits(){ return GrotJSONBox0(); }
export function GrotGOSimpleBox(){ return GrotCredits0(); }
export function GrotJSONBox(){ return GrotGOSimpleBox0(); }
