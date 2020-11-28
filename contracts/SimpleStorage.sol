pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
  struct RecordDetails {
        string record_id;
        string timestamp;
        string record_code;
        string description;
    }

    RecordDetails[] public record;
    mapping(address => RecordDetails[]) public institute;

    function addrecordReport(string memory _record_id,address institute_id, string memory _timestamp, string memory _record_code, string memory _description) public returns(uint) {



        institute[institute_id].push(RecordDetails(_record_id,_timestamp,_record_code,_description));
        return 1;
    }

  //  function getrecordCount() public view returns(uint) {
    //    return record.length;
  //  }

  //  function getrecordBlock(uint index) public view returns (string memory, string memory, string memory, string memory)
  //  {
  //      return (record[index].record_id, record[index].timestamp, record[index].record_code, record[index].description);
  //  }
    function getAllrecordDetails(address _institute_id) public view returns (RecordDetails[] memory)
    {
        RecordDetails[] memory id = new RecordDetails[](institute[_institute_id].length);
        for (uint i = 0; i < institute[_institute_id].length; i++) {
            RecordDetails storage temprecord = institute[_institute_id][i];
            id[i] = temprecord;
        }
        return id;
    }
}
