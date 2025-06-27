import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorreosService } from './correos.service';
import { CreateCorreoDto } from './dto/create-correo.dto';
import { UpdateCorreoDto } from './dto/update-correo.dto';

@Controller('correos')
export class CorreosController {
  constructor(private readonly correosService: CorreosService) {}

  @Post()
  create(@Body() createCorreoDto: CreateCorreoDto) {
    return this.correosService.create(createCorreoDto);
  }


}
