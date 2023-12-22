import { IUserRequestInterface } from '../schema/interfaces';

export interface ISchemaSearchInterface {
    ledgerId?: string;
    pageNumber: number;
    pageSize: number;
    sorting: string;
    sortByValue: string;
    searchByText: string;
    user?: IUserRequestInterface
}

export interface ICredDeffSchemaSearchInterface {
    pageNumber: number;
    pageSize: number;
    sorting: string;
    sortByValue: string;
    user?: IUserRequestInterface
}
export interface IConnectionSearchinterface {
    pageNumber: number;
    pageSize: number;
    sorting: string;
    sortByValue: string;
    searchByText: string;
    user?: IUserRequestInterface
}

export interface IConnectionDetailsById {
    id: string;
    createdAt: string;
    did: string;
    theirDid: string;
    theirLabel: string;
    state: string;
    role: string;
    autoAcceptConnection: boolean;
    threadId: string;
    protocol: string;
    outOfBandId: string;
    updatedAt: string;
  }
  
