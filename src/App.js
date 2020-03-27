import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
// Rest Providers
import dataProvider from './rest/dataProvider';
import authProvider from './rest/authProvider';
// Resources
import { UserList, UserCreate, UserEdit } from './resources/users'
import { CostumerList, CostumerCreate, CostumerEdit } from './resources/costumer'
import { ContextList, ContextCreate, ContextEdit } from './resources/context'
import { MailboxList, MailboxCreate, MailboxEdit } from './resources/mailbox'
import { GroupList, GroupCreate } from './resources/group'


//Theming
import { Dashboard } from './dashboard/dashboard'
import { Face, Domain,  AccountTree, Mail, Group, Print } from '@material-ui/icons';



const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users"
      list={ UserList }
      create={ UserCreate }
      edit={ UserEdit }
      icon={ Face } 
    />
    <Resource name="costumers"
      list={ CostumerList }
      create={ CostumerCreate }
      edit={ CostumerEdit }
      icon={ Domain } 
    />
    <Resource name="contexts"
      list={ ContextList }
      create={ ContextCreate }
      edit={ ContextEdit }
      icon={ AccountTree }
    />
    <Resource name="mailboxes"
      list={ MailboxList }
      create={ MailboxCreate }
      edit={ MailboxEdit }
      icon={ Mail }
    />
    <Resource name="groups"
      list={ GroupList }
      create={ GroupCreate }
      edit={ EditGuesser }
      icon={ Group }
    />



</Admin>
);

export default App;
