import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";


@Controller('api/user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUsers()
    }

    @Post()
    async postUser(@Body() postData: User): Promise<User> {
        return this.userService.createUser(postData)
    }

    @Get(':id')
    async getUser(@Param('id') id: number): Promise<User | null> {
        return this.userService.getUser(id)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<User> {
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() postData: User): Promise<User> {
        return this.userService.updateUser(id, postData)
    }
}