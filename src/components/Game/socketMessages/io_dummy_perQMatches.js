module.exports = {
  // sample response for ONE question match recieved back rom socker server
      // userAnsPerQ: {
      //   USER_ID: {
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q
      //   },
      //   USER_ID: {
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q,
      //     user_id_of_other_user: percent_of_match_for_one_q
      //   }
      // }
  dummyUserAnswers: {

    1: {
        1: 100,   
        5: 50,
        6: 50,
        7: 50,
        9: 50,
        10: 50,
        3: 50,
        4: 0,
        8: 0
      },
    2: {
        2: 100,
        1: 100,
        5: 0,
        6: 33,
        7: 50,
        9: 50,
        10: 33,
        3: 50,
        4: 0,
        8: 0
      },        
    5: {
        2: 100,
        1: 50,
        5: 100,
        6: 50,
        7: 50,
        9: 50,
        10: 33,
        3: 33,
        4: 0,
        8: 0
      }, 
    6: {
        2: 50,
        1: 33,
        5: 50,
        6: 100,
        7: 50,
        9: 50,
        10: 50,
        3: 33,
        4: 0,
        8: 0
      }, 
    7: {
        2: 100,
        7: 100,
        1: 0,
        5: 50,
        6: 50,
        3: 0,
        9: 33,
        10: 33,
        4: 0,
        8: 0            
      }, 
    9: {
        2: 50,
        9: 100,
        1: 50,
        5: 50,
        6: 0,
        7: 50,
        10: 50,
        3: 50,
        4: 0,
        8: 0
      },
    10: {
        2: 50,
        10: 100,
        1: 50,
        5: 33,
        6: 50,
        7: 50,
        3: 33,
        9: 0,
        4: 0,
        8: 0
      },
    3: {
        2: 100,
        3: 100,
        1: 50,
        5: 33,
        6: 50,
        7: 50,
        10: 33,
        9: 50,
        4: 0,
        8: 0        
      }, 
    4: {
        2: 0,
        3: 0,
        1: 0,
        5: 0,
        6: 0,
        7: 0,
        10: 0,
        4: 100,
        8: 0  
    }, 
    8: {
        2: 0,
        3: 0,
        1: 0,
        5: 0,
        6: 0,
        7: 0,
        10: 0,
        4: 0,
        8: 100  
    }
  }
}