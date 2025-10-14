import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  MikroOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health-check')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MikroOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  findAll() {
    return this.health.check([
      () => this.http.pingCheck('swagger', 'http://localhost:3000/swagger'),
      () => this.http.pingCheck('compodoc', 'http://localhost:8080/'),
      () => this.http.pingCheck('dashboard', 'http://localhost:5480/'),
      () => this.db.pingCheck('database'),
    ]);
  }
}
