/*
 * 
 *  Copyright (c) 2011
 *  name : mhogo mchungu 
 *  email: mhogomchungu@gmail.com
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 * 
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "includes.h"

int open_volume( const char * dev,const char * map,const char * m_point,uid_t id,const char * mode,const char * pass,size_t pass_size ) 
{
	int h ;
	int luks;
	string_t mapper ;
	
	if( is_path_valid( dev ) == -1 )		 
		return 3 ;
	
	if( is_path_valid( map ) == 1 )
		return 2 ;	
		
	luks = is_luks( dev ) ;		
		
	if( luks == 0 )
		h = open_luks( dev,map,mode,pass,pass_size ) ;
	else
		h = open_plain( dev,map,mode,pass,pass_size,"cbc-essiv:sha256" ) ;
		
	switch ( h ){
		case 1 : return 4 ;
		case 2 : return 8 ; 
		case 3 : return 3 ;	 
	}
	
	mapper = String( "/dev/mapper/" ) ;
	StringAppend( mapper,map ) ;
	h = mount_volume( StringContent( mapper ),m_point,mode,id ) ;	
	
	if( h != 0 && luks == 1 ){
		/*
		 * opening a plain volume failed,try to reopen it in legacy/compatibility mode
		 */
		if( close_mapper( map ) != 0 ){
			h = 15 ;
			goto out ;
		}
		open_plain( dev,map,mode,pass,pass_size,"cbc-plain" ) ;
		h = mount_volume( StringContent( mapper ),m_point,mode,id ) ;
	}
	
	if( h != 0 )
		if( close_mapper( map ) != 0 )
			h = 15 ;
	out:
	StringDelete( &mapper ) ;
	return h ;
}

