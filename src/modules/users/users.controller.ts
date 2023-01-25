import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let users = await this.usersService.findAll();
    let responseJSON = {"data": { "users": users, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let user = await this.usersService.findOne(+id);
    let responseJSON = {"data": { "user": user, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get('getuserbyuserid/:user_id')
  async getUserByUserId(@Param('user_id') user_id: string, @Res() res: Response) {
    let user = await this.usersService.findOneByUserId(user_id);
    let responseJSON = {"data": { "user": user, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(+id, updateUserDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
