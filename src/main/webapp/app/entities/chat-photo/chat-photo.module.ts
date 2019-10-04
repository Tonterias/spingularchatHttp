import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpingularSharedModule } from 'app/shared/shared.module';
import { ChatPhotoComponent } from './chat-photo.component';
import { ChatPhotoDetailComponent } from './chat-photo-detail.component';
import { ChatPhotoUpdateComponent } from './chat-photo-update.component';
import { ChatPhotoDeletePopupComponent, ChatPhotoDeleteDialogComponent } from './chat-photo-delete-dialog.component';
import { chatPhotoRoute, chatPhotoPopupRoute } from './chat-photo.route';

const ENTITY_STATES = [...chatPhotoRoute, ...chatPhotoPopupRoute];

@NgModule({
  imports: [SpingularSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ChatPhotoComponent,
    ChatPhotoDetailComponent,
    ChatPhotoUpdateComponent,
    ChatPhotoDeleteDialogComponent,
    ChatPhotoDeletePopupComponent
  ],
  entryComponents: [ChatPhotoDeleteDialogComponent]
})
export class SpingularChatPhotoModule {}
