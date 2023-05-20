import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const selectLocationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CareerPagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-20 items-center justify-end mx-auto pt-[49px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1243px] mx-auto md:px-5 w-full">
          <header className="flex flex-row items-center justify-center w-full">
            <Img
              src="images/img_image5.png"
              className="h-[77px] md:h-auto object-cover w-[8%]"
              alt="imageFive"
            />
            <ul className="flex sm:flex-col flex-row md:hidden items-end justify-between ml-[428px] my-[18px] w-[59%] common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="sm:mt-0 my-1.5 text-gray_600 hover:text-light_blue_A700"
                >
                  <Text variant="body1">Home</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-col items-center justify-start mb-0.5 sm:mt-0 mt-[7px]">
                    <a href="javascript:" className="text-light_blue_A700">
                      <Text variant="body1">Career</Text>
                    </a>
                    <Line className="bg-light_blue_A700 h-0.5 w-[32%]" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="sm:mt-0 my-1.5 text-gray_600 hover:text-light_blue_A700"
                >
                  <Text variant="body1">About</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="sm:mt-0 my-1.5 text-gray_600 hover:text-light_blue_A700"
                >
                  <Text variant="body1">Who we’re</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="sm:mt-0 my-1.5 text-gray_600 hover:text-light_blue_A700"
                >
                  <Text variant="body1">What we do</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-lg text-white_A700"
                    shape="RoundedBorder20"
                    size="sm"
                    variant="FillLightblueA700"
                  >
                    Contact Us
                  </Button>
                </a>
              </li>
            </ul>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-20 w-full">
            <Text
              className="md:mt-0 mt-[76px] text-gray_600"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet consectetur. Amet diam ipsum
              suspendisse gravida. Metus sit habitant amet quam risus eget
              consequat. Phasellus nec morbi sit magna.
            </Text>
            <div className="h-[371px] relative w-[49%] md:w-full">
              <div className="flex flex-col gap-[27px] justify-start mb-[undefinedpx] ml-[137px] mt-auto w-[33%] z-[1]">
                <Img
                  src="images/img_image34.png"
                  className="h-[55px] md:h-auto md:ml-[0] ml-[89px] object-cover w-1/4"
                  alt="imageThirtyFour"
                />
                <Img
                  src="images/img_image36.png"
                  className="h-[220px] md:h-auto object-cover w-full"
                  alt="imageThirtySix"
                />
              </div>
              <Img
                src="images/img_image37.png"
                className="h-12 mb-[-9px] ml-auto mr-[226px] object-cover w-[8%] z-[1]"
                alt="imageThirtySeven"
              />
              <div className="h-[332px] mt-auto mx-auto w-full">
                <div className="absolute h-[280px] inset-y-[0] left-[0] my-auto w-[43%]">
                  <Img
                    src="images/img_image32.png"
                    className="h-[280px] m-auto object-cover w-full"
                    alt="imageThirtyTwo"
                  />
                  <Img
                    src="images/img_image35.png"
                    className="absolute h-[47px] left-[20%] object-cover top-[0] w-[17%]"
                    alt="imageThirtyFive"
                  />
                </div>
                <Img
                  src="images/img_image31.png"
                  className="absolute h-[332px] inset-y-[0] my-auto object-cover right-[0] w-[61%]"
                  alt="imageThirtyOne"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-[84px] w-full">
            <div className="flex flex-col gap-[35px] items-center justify-start w-full">
              <Text className="text-black_900" as="h1" variant="h1">
                Search For Open Role
              </Text>
              <Text
                className="text-center text-gray_600 w-full"
                as="h3"
                variant="h3"
              >
                Lorem ipsum dolor sit amet consectetur. Amet diam ipsum
                suspendisse gravida. Metus sit habitant amet quam risus eget
                consequat.
              </Text>
            </div>
            <div className="sm:h-[1075px] md:h-[1208px] h-[824px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start ml-auto my-auto w-[3%]">
                <div className="bg-blue_gray_50 flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_300 h-[479px] mb-[312px] w-[90%]"></div>
                </div>
                <Button
                  className="flex h-[29px] items-center justify-center w-[29px]"
                  size="smIcn"
                  variant="icbFillBluegray50"
                >
                  <Img src="images/img_group.svg" className="h-6" alt="group" />
                </Button>
              </div>
              <div className="absolute border border-gray_300 border-solid flex flex-col gap-10 h-full inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 w-full">
                <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-[13px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[28%] md:w-full">
                    <Text className="text-gray_600" as="h6" variant="h6">
                      Job Title
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray_100 sm:text-xl text-2xl text-blue_gray_100 text-left w-full"
                      name="groupFive"
                      placeholder="Search by Job Title"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[28%] md:w-full">
                    <Text className="text-gray_600" as="h6" variant="h6">
                      Department
                    </Text>
                    <Input
                      wrapClassName="flex mt-0.5 w-full"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray_100 sm:text-xl text-2xl text-blue_gray_100 text-left w-full"
                      name="groupSix"
                      placeholder="Select Department"
                      suffix={
                        <Img
                          src="images/img_group_blue_gray_100.svg"
                          className="mt-[3px] mb-2 ml-[33px]"
                          alt="Group"
                        />
                      }
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[28%] md:w-full">
                    <Text className="text-gray_600" as="h6" variant="h6">
                      Location
                    </Text>
                    <SelectBox
                      className="font-medium leading-[normal] text-2xl md:text-[22px] text-blue_gray_100 text-left sm:text-xl w-full"
                      placeholderClassName="text-blue_gray_100"
                      indicator={
                        <Img
                          src="images/img_group_blue_gray_100.svg"
                          className="h-6 mr-[0] w-6"
                          alt="Group"
                        />
                      }
                      size="sm"
                      isSearchable={false}
                      placeholder="Select Location"
                      shape="RoundedBorder10"
                      isMulti={false}
                      options={selectLocationOptionsList}
                      name="groupSeven"
                      variant="OutlineBluegray100"
                    />
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start md:mt-0 mt-[35px] p-[17px] rounded-[10px] w-[7%] md:w-full">
                    <Img
                      src="images/img_search.svg"
                      className="h-9 w-9"
                      alt="search"
                    />
                  </div>
                </div>
                <div className="border border-blue_gray_100 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between p-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start ml-6 sm:ml-[0] sm:mt-0 mt-[5px]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <Text className="text-gray_800" as="h3" variant="h3">
                        Sales Manager
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start mb-[3px] w-[27%]">
                          <Img
                            src="images/img_frame.svg"
                            className="h-[22px] w-[22px]"
                            alt="frame"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            Delhi
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-[3px] w-[49%]">
                          <Img
                            src="images/img_flat.svg"
                            className="h-[22px] mt-0.5 w-[22px]"
                            alt="flat"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            5 - 10 years
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[177px] mr-[31px] sm:mt-0 my-[15px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillLightblueA700"
                  >
                    View Job
                  </Button>
                </div>
                <div className="border border-blue_gray_100 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between p-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start ml-6 sm:ml-[0] sm:mt-0 mt-[5px]">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text className="text-gray_800" as="h3" variant="h3">
                        Junior Sales Manager
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start mb-0.5 w-[37%]">
                          <Img
                            src="images/img_frame.svg"
                            className="h-[22px] w-[22px]"
                            alt="frame_One"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            Kolkata
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-0.5 w-[48%]">
                          <Img
                            src="images/img_flat.svg"
                            className="h-[22px] mt-0.5 w-[22px]"
                            alt="flat_One"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            3 - 5 years
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[177px] mr-[31px] sm:mt-0 my-[15px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillLightblueA700"
                  >
                    View Job
                  </Button>
                </div>
                <div className="border border-blue_gray_100 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between p-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start ml-6 sm:ml-[0] sm:mt-0 mt-[5px]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <Text className="text-gray_800" as="h3" variant="h3">
                        Frontend Developer
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start mb-[3px] w-2/5">
                          <Img
                            src="images/img_frame.svg"
                            className="h-[22px] w-[22px]"
                            alt="frame_Two"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            Mumbai
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-[3px] w-[47%]">
                          <Img
                            src="images/img_flat.svg"
                            className="h-[22px] mt-0.5 w-[22px]"
                            alt="flat_Two"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            1 - 3 years
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[177px] mr-[31px] sm:mt-0 my-[15px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillLightblueA700"
                  >
                    View Job
                  </Button>
                </div>
                <div className="border border-blue_gray_100 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[3px] p-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start ml-6 sm:ml-[0] sm:mt-0 mt-[5px]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <Text className="text-gray_800" as="h3" variant="h3">
                        Full Stack Developer
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start mb-[3px] w-[27%]">
                          <Img
                            src="images/img_frame.svg"
                            className="h-[22px] w-[22px]"
                            alt="frame_Three"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            Delhi
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-[3px] w-[49%]">
                          <Img
                            src="images/img_flat.svg"
                            className="h-[22px] mt-0.5 w-[22px]"
                            alt="flat_Three"
                          />
                          <Text className="text-gray_500" as="h5" variant="h5">
                            5 - 10 years
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[177px] mr-[31px] sm:mt-0 my-[15px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillLightblueA700"
                  >
                    View Job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-light_blue_900 flex items-center justify-center md:px-5 rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col items-center justify-center mb-[42px] ml-[103px] mr-[100px] mt-[33px] w-[86%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start mb-[9px] w-[34%] md:w-full">
                <Text className="text-white_A700" as="h2" variant="h2">
                  Company Name
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="font-medium text-gray_100"
                      >
                        <Text as="h4" variant="h4">
                          Join With Us{" "}
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-white_A700 flex flex-row font-inter items-center justify-between mt-[5px] rounded-[10px]">
                          <Text
                            className="font-medium ml-[18px] text-gray_400"
                            variant="body2"
                          >
                            Enter your email address
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] min-w-[105px] text-[15px] text-center text-gray_100"
                            shape="CustomBorderLR10"
                            size="md"
                            variant="OutlineWhiteA700"
                          >
                            Sign Up
                          </Button>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-semibold mt-7 text-gray_100"
                      >
                        <Text as="h4" variant="h4">
                          Make You check us on{" "}
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-semibold mt-0.5 text-gray_100"
                      >
                        <Text variant="body2">
                          Android & ios we are available on both the platform
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-[15px] items-start justify-start mt-[26px]">
                          <Img
                            src="images/img_image12.png"
                            className="h-[45px] md:h-auto mt-0.5 object-cover w-[48%]"
                            alt="imageTwelve"
                          />
                          <Img
                            src="images/img_image13.png"
                            className="h-[45px] md:h-auto mb-0.5 object-cover w-[49%]"
                            alt="imageThirteen"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[56%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[22px] items-center justify-start w-[17%] sm:w-full">
                    <Text
                      className="font-semibold text-white_A700"
                      as="h4"
                      variant="h4"
                    >
                      GENARAL
                    </Text>
                    <ul className="flex flex-col font-inter gap-[19px] items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">HOME</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">SHOP</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">ABOUT</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">COLLECTIONS</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-start justify-start w-[26%] sm:w-full">
                    <Text
                      className="font-semibold text-white_A700"
                      as="h4"
                      variant="h4"
                    >
                      LEGAL
                    </Text>
                    <ul className="flex flex-col font-inter gap-[18px] items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">FAQs</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">ABOUT US</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">PRIVACY & POLICY</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="font-medium text-gray_100"
                        >
                          <Text variant="body2">TERMS & CONDITIONS</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-start justify-start w-[35%] sm:w-full">
                    <a
                      href="javascript:"
                      className="font-semibold text-white_A700"
                    >
                      <Text as="h4" variant="h4">
                        CONTACT US
                      </Text>
                    </a>
                    <ul className="flex flex-col font-inter gap-5 items-start justify-start w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-start justify-start">
                            <Img
                              src="images/img_location.png"
                              className="h-[25px] md:h-auto object-cover w-[13%]"
                              alt="location_One"
                            />
                            <Text
                              className="font-semibold leading-[20.00px] text-gray_100"
                              variant="body3"
                            >
                              <>
                                COMPANY MARKET HOUSE,
                                <br />
                                10/2 PARK BASE LANE
                                <br /> CA 94158
                              </>
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-center justify-start">
                            <Img
                              src="images/img_call.png"
                              className="h-[25px] md:h-auto object-cover w-[22%]"
                              alt="call"
                            />
                            <Text
                              className="font-medium text-gray_100"
                              variant="body3"
                            >
                              012-345-678
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-[11px] items-start justify-start">
                            <Img
                              src="images/img_envelope.png"
                              className="h-[25px] md:h-auto object-cover w-[13%]"
                              alt="envelope"
                            />
                            <Text
                              className="font-semibold mt-[5px] text-gray_100 w-[83%] sm:w-full"
                              variant="body3"
                            >
                              companyname123@gmail.com
                            </Text>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-start w-[37%] md:w-full">
                  <Text
                    className="font-semibold text-white_A700"
                    as="h4"
                    variant="h4"
                  >
                    FOLLOW US{" "}
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-[36%]">
                    <Img
                      src="images/img_facebook.png"
                      className="h-7 md:h-auto object-cover w-7"
                      alt="facebook"
                    />
                    <Img
                      src="images/img_linkedincircled.png"
                      className="h-7 md:h-auto object-cover w-7"
                      alt="linkedincircled"
                    />
                    <Img
                      src="images/img_twittercircled.png"
                      className="h-7 md:h-auto object-cover w-7"
                      alt="twittercircled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CareerPagePage;
