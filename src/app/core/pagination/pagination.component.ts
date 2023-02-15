import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css'],
	// inputs: ['pictureLength'],
})
export class PaginationComponent {
	@Input()
	pictureLength: number | undefined;

	// @Input()
	// currentPictureIndex: number | undefined

	// @Input()
	// onPictureIndexChanged: any

	@Output()
	currentPictureIndex = new EventEmitter<PageEvent>();

	handlePageEvent(event: PageEvent) {
		this.currentPictureIndex.emit(event);
	}
}
