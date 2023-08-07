import { Injectable } from '@nestjs/common';
import { UserOrgRolesRepository } from '../repositories';
// eslint-disable-next-line camelcase
import { user_org_roles } from '@prisma/client';

@Injectable()
export class UserOrgRolesService {
  constructor(private readonly userOrgRoleRepository: UserOrgRolesRepository) {}

  /**
   *
   * @param createUserDto
   * @returns user details
   */
  // eslint-disable-next-line camelcase
  async createUserOrgRole(userId: number, roleId: number, orgId?: number): Promise<user_org_roles> {
    return this.userOrgRoleRepository.createUserOrgRole(userId, roleId, orgId);
  }


  /**
   * 
   * @param userId 
   * @param orgId 
   * @returns Boolean response for user exist
   */
  async checkUserOrgExist(userId: number, orgId: number): Promise<boolean> {
    const queryOptions = {
      userId,
      orgId
    };
    const userOrgDetails = await this.userOrgRoleRepository.getUserOrgData(queryOptions);

    if (userOrgDetails && 0 === userOrgDetails.length) {
      return false;
    }

    return true;
  }


  /**
   * 
   * @param userId 
   * @param orgId 
   * @param roleIds 
   * @returns 
   */
  async updateUserOrgRole(userId: number, orgId: number, roleIds: number[]): Promise<boolean> {
  
    for (const role of roleIds) {
      this.userOrgRoleRepository.createUserOrgRole(userId, role, orgId);
    }

    return true;
  }

  /**
   * 
   * @param userId 
   * @param orgId 
   * @returns Delete user org roles
   */
  async deleteOrgRoles(userId: number, orgId: number): Promise<object> {

    const queryOptions = {
      userId,
      orgId
    };

    return this.userOrgRoleRepository.deleteMany(queryOptions);

  }
}