import { TickerDto } from './../../../../common/dtos/ticker.model';
import { Exchange } from './../../../../common/enums/exchange';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
import { Component, Get, Req } from '@nestjs/common';
import { RxHttpRequest } from 'rx-http-request';

@Component()
export abstract class ApiWrapper {

    abstract apiEndpoint: string;
    abstract exchange: Exchange;

    abstract getTicker(): Observable<TickerDto[]>

    protected composeUrl(command: string) {
        return `${this.apiEndpoint}?command=${command}`;
    }
}


