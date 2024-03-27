import { AdminPage } from './AdminPage';
import { LoginPage } from './LoginPage';
import { CreateNewPostPage } from './post/CreateNewPostPage';
import { PostTablePage } from './post/PostTablePage';
import { CreateNewProfilePage } from './profile/CreateNewProfilePage';
import { ProfileTablePage } from './profile/ProfileTablePage';
import { CreateNewPublisherPage } from './publisher/CreateNewPublisherPage';
import { PublisherTablePage } from './publisher/PublisherTablePage';
import { CreateNewAndFilterWidget } from './widgets/CreateNewAndFilterWidget';
import { RemoveItemPopupWidget } from './widgets/RemoveItemPopupWidget';
import { SideBarWidget } from './widgets/SideBarWidget';
import { TableActionButtonsWidget } from './widgets/TableActionButtonsWidget';
import { UserLoggedWidget } from './widgets/UserLoggedWidget';

export class App {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.adminPage = new AdminPage(page);
        this.sideBarWidget = new SideBarWidget(page);
        this.publisherTablePage = new PublisherTablePage(page);
        this.createNewPublisherPage = new CreateNewPublisherPage(page);
        this.createNewAndFilterWidget = new CreateNewAndFilterWidget(page);
        this.profileTablePage = new ProfileTablePage(page);
        this.createNewProfilePage = new CreateNewProfilePage(page);
        this.postTablePage = new PostTablePage(page);
        this.createNewPostPage = new CreateNewPostPage(page);
        this.userLoggedWidget = new UserLoggedWidget(page);
        this.tableActionButtonsWidget = new TableActionButtonsWidget(page);
        this.removeItemPopupWidget = new RemoveItemPopupWidget(page);
    }
}
