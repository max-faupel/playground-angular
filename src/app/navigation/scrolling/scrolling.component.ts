import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollingComponent implements OnInit {
  items = Array.from({ length: 100 }).map((_, i) => "");

  @ViewChild('virtualScroll') virtualScroll!: CdkVirtualScrollViewport;

  constructor(private _scrollDispatcher: ScrollDispatcher) { }
  ngOnInit(): void {
    this._scrollDispatcher.scrolled().subscribe((event => {
      this.loadData(this.virtualScroll.getRenderedRange().start, this.virtualScroll.getRenderedRange().end);
    }));
  }

  loadData(fromIndex: number, toIndex: number) {
    console.log(`${fromIndex} - ${toIndex}`)
    for (let i = fromIndex; i < toIndex; i++) {
      this.items[i] = `Item #${i}`;
    }
  }
}
