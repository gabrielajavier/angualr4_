import {Pipe, PipeTransform} from "@angular/core";
import linkifySrt from 'linkifyjs/string';

@Pipe ({name:'Linkifystr'})
export class LinkifystrPipe implements PipeTransform{
	transform(str: string): string{
		return str ? linkifySrt(str, {target:'_system'}): str;
	}
}