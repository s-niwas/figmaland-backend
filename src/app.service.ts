import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { db, Table } from './db.config';

@Injectable()
export class AppService {
  async insertUser(user: User): Promise<any> {
    const params = {
      TableName: Table,
      Item: user,
    };
    await db.put(params).promise();
    return 'user created';
  }

  async allUser(): Promise<any> {
    const params = {
      TableName: Table,
    };
    try {
      const { Items = [] } = await db.scan(params).promise();
      return Items;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async updateUser(userName: string, user: User): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        userName: userName,
      },
      UpdateExpression:
        'set #userName:userName,#email=:email,#password=:password',
      ExpressionAttributeValues: {
        userName: user.userName,
        email: user.email,
        password: user.password,
      },
      ExpressionAttributeNames: {
        userName: 'userName',
        '#email': 'email',
        '#password': 'password',
      },
    };
    await db.update(params).promise();
    return 'user updated';
  }
  async deleteUser(userName: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        name: userName,
      },
    };
    await db.delete(params).promise();
    return 'user Deleted';
  }

  async getSingleUser(userName: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        userName: userName,
      },
    };
    const Item = await db.get(params).promise();
    return Item;
  }
}
