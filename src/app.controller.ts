import { Body,Param,Controller, Get,Post,Put,Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from 'src/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getuser/:userName')
  async getSingleUser(@Param('userName') userName: string) {
    const single_user = await this.appService.getSingleUser(userName)
      return single_user;
  }

  @Get('getuser/all')
      async allUser(){
         const aluser= await this.appService.allUser();
         if(!aluser){
            return "failed";
         }else {
            return aluser;
         }
      }
  @Post('create')
  async insertUser(@Body() user:User) {
    const crtuser = await this.appService.insertUser(user)
    
  }

  @Put('update/:userName')
  async updateUser(@Param('userName') userName: string, @Body() user: User) {
    const updateuser = await this.appService.updateUser(userName, user)
      
  }

  @Delete('delete/:email')
  async deleteUser(@Param('email') email: string) {
    const deleteuser = await this.appService.deleteUser(email)
  }

      // @Post('/register')
      // async register(@Body() authRegisterUserDto: register) {
      //     return await this.appService.registerUser(authRegisterUserDto);
      // }
  
      // @Post('/login')
      // async login(@Body() authLoginUserDto: User) {
      //     return await this.appService.authenticateUser(authLoginUserDto);
      // }
  
}
